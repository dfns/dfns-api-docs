# Authentication Overview

### Postman Pre-request Script to automate user action signing (using PAT / Service Account)

```javascript
// jsrsasign expects us to be in a browser, but they don't really use the values for anything.
// So if we setup a fake window and navigator object, everything works fine from Postman.
window = {
};
navigator = {
    appName: "blah",
    userAgent: "blah"
};

function generateNonce() {
    const { v4: uuidv4 } = require('uuid');
    return base64url(JSON.stringify({
        uuid: uuidv4(),
        date: new Date().toISOString()
    }));
}

function base64url(str, format=undefined) {
    return Buffer.from(str, format).toString("base64")
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}

function signAction() {
    pm.sendRequest("https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/8.0.20/jsrsasign-all-min.js", (err, res) => {
        pm.environment.set("res", res.text());
        eval(pm.environment.get("res"));
        const domain = pm.environment.get("customerApiDomain");
        const apiKey = pm.environment.get("customerAccessToken");
        const appId = pm.request.headers.get("X-DFNS-APPID");
        const signingKey = pm.environment.get("patPrivateKey").replace(/\\n/g, "\n");
        const createSigningChallengeRequest = {
            url: `https://${domain}/auth/action/init`,
            method: "POST",
            header: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey,
                "X-DFNS-APPID": appId,
                "X-DFNS-NONCE": generateNonce()
            },
            body: {
                mode: "raw",
                raw: JSON.stringify({
                    userActionPayload: pm.request.body.raw,
                    userActionHttpPath: '/' + pm.request.url.path.join('/'),
                    userActionHttpMethod: pm.request.method
                })
            }
        };
        pm.sendRequest(createSigningChallengeRequest, (error, response) => {
            if (error || response.code !== 200) {
                throw new Error("Unable to get challenge: " + response.json().error.message);
            }
            const challenge = response.json();
            const clientData = JSON.stringify({
                type: "key.get",
                challenge: challenge.challenge,
                origin: `https://${domain}`,
            });
            const sig = new KJUR.crypto.Signature({"alg": "SHA256withECDSA"});
            sig.init(signingKey);
            sig.updateString(clientData);
            const signature = base64url(sig.sign(), 'hex');
            const signedChallenge = {
                kind: "Key",
                credentialAssertion: {
                    credId: challenge.allowCredentials.key[0].id,
                    clientData: base64url(clientData),
                    signature: signature
                }
            };
            const createSignatureRequest = {
                url: `https://${domain}/auth/action`,
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiKey,
                    "X-DFNS-APPID": appId,
                    "X-DFNS-NONCE": generateNonce()
                },
                body: {
                    mode: "raw",
                    raw: JSON.stringify({
                        challengeIdentifier: challenge.challengeIdentifier,
                        firstFactor: signedChallenge
                    })
                }
            };
            pm.sendRequest(createSignatureRequest, (sigError, sigResponse) => {
                if (sigError || sigResponse.code !== 200) {
                    throw new Error("Failed to sign request: " + response.json().error.message);
                }
                pm.request.headers.upsert({key: "X-DFNS-USERACTION", value: sigResponse.json().userAction});
            });
        });
    })
}

if (pm.request.headers.has('X-DFNS-USERACTION')) {
    signAction();
}

pm.request.headers.add({key: 'X-DFNS-NONCE', value: generateNonce()});
```
