# Import Wallet Private Key

`POST /wallets/import`

Dfns secures private keys by generating them as MPC key shares in our decentralized key management network.  This happens by default when you [create a wallet](../create-wallet.md).&#x20;

In certain circumstances, however, customers require Dfns to create a wallet from an existing private key (eg. the corresponding address for the key may be immutably locked in an existing smart contract). In this case, Dfns exposes the following key import API which can be used in conjunction with our [import SDK](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/sdk/import-wallet). &#x20;

{% hint style="danger" %}
Dfns can not guarantee the security of imported keys as we have no way to control who had access to the private key prior to import.  For this reason, this feature is restricted to Enterprise customers who have signed a contractual addendum limiting our liability for imported keys.  Please contact your sales representative for more information.&#x20;
{% endhint %}

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Wallets:Import` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="232">Request body fields</th><th width="172.786301369863">Required/Optional</th><th width="225">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>network</code></td><td>Required</td><td>Network enum for the wallet (See <a href="../#supported-networks">Supported Networks</a> +  <a href="../#pseudo-networks">Pseudo Network</a> for possible values)</td><td>String</td></tr><tr><td><code>name</code></td><td>Required</td><td>A name for the wallet</td><td>String</td></tr><tr><td><code>protocol</code></td><td>Required</td><td>Always "CGGMP21"</td><td>String</td></tr><tr><td><code>curve</code></td><td>Required</td><td>Always "secp256k1"</td><td>String</td></tr><tr><td><code>minSigners</code></td><td>Required</td><td>Min number of signers.  We recommend 3. </td><td>Integer</td></tr><tr><td><code>encryptedKeyshares</code></td><td>Required</td><td>An array of objects containing the encrypted keyshares.  See format below. </td><td>Object Array</td></tr></tbody></table>

#### Encrypted Keyshare Object

<table><thead><tr><th width="232">Request body fields</th><th width="172.786301369863">Required/Optional</th><th width="225">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>signerId</code></td><td>Required</td><td>ID of the signer returned from <code>GET /signers</code></td><td>String</td></tr><tr><td><code>encryptedKeyshare</code></td><td>Required</td><td>The key share encrypted with the private key created for the import operation</td><td>String</td></tr></tbody></table>

#### Example JSON

```json
{
    "network": "EthereumSepolia",
    "name": "My Imported Wallet",
    "minSigners": 3,
    "protocol": "CGGMP21",
    "curve": "secp256k1",
    "encryptedKeyshares": [
        {
            "signerId": "EX5PdJFcutVTJCgAcSGGGy264JwnrOLLyrZIqMHG67I=",
            "encryptedKeyshare": "ilp3GeoJ7HZZx6+iPuA7K2uQkTzle1WUiGppwB45GWpdLu7eyVO5g2aUOIntHY8YMi74wyLl8CVr2gZd2K8+JKP7vArBg3wPkZaHaI3YnTEadPz3wq9jjbIlV7AxKaxot7pWAsjjOupqDH6hkELrNwrbyBOq0LablGykHX0ZOGYbvPgGl3ueUfp5EIaDsYHgkPCivvqABgAzTqlLDPdn4BsZmDgz+4DmliPytGhzZFEMmFROzYCPuW+NP+t6cK4LVY7PrvN4/Pvt/JJE6g5tlY24ErbVQpxjCwaFc+Hxql+fhPCocMWVxkPtCoQ7Rk8Ajr72/8sAKFnKYDh10tOzE+cLJtqPmuHLMx2bH+pHwgxDjmkpIuGcLI1vyrIHH0Vv6rjzI/ZvS6Y3zr0uwgsVEtgHuip0tdN8KY4hMvYXPKo3dWwG1vzfhjynoQ4m0kAyP89btI8VqYPKF61xCKf6dhg8J5TZ2HtoHbG3l33HMsn04gd+1FCTPXIcXlmZCqNQE4r1hOkPlg4DbUBOKGq4mTSUvTVjA+HV2GB+CUMQk7wQ6tKgCGZ5+8gSvDhrmFbW7cB8tJayeDJq/KmNBqCyYcUOg4g0gOZjcD8yf2ZNHiVXM973BDjZXN+XeJMrQ9AfVkmzGq7JB6IJJgaYVhp3T0nQLOTf926P6kWXmabct/U6ZlC+SzKL04wRUr3Qx9YxJYYV0DkzZ9dOwogQgffz0V+zvs3D6/oUYqbplVZcz31lERn5Ej7VuSKnlZnbjwMQNcON8nVJjcSaa0XGUKLBProwNz6o3OqamZU7ZxmqRZXKsOjnBh20I8i1lXPm2Pvt1EoteweGKSbHeXJEVhpI3dbh8mxN14AbIMfg60zxrYbwYqBW4qCrY82F0biyCIqOnQHwPRQ0U7CpNM1p93sFvx4TgIPyn6dOmzEVWtqiv4mEQY4ySa7FzrM2E+osPoZoM6U/SJ+ct3stAdR5Vtt0swbbGLkVApctClWRJzDNcm4ttQj537UOYFM5qVvpcsVBUN7G/kDfrlxs8JAqG0JAsQho/G2TMBgRFq60dQGIjhxqMlwiQqD3NTnI/e0Zb0o+zJS113S0XYZhlQAQvmmoXsFivs7AQJOR4ZrEc4buHMuZ39cYrRIvEYQc9vw8hlC7HQX0Up4zoYjpQENnWIzKDmhKvYFsVwKbaHPM5UKFY8MyzjuYQAGfr0rx4uXJd1h/45SMtdaEUVx1ODZDpLLtw4u7+Rq72lQUD3QBqr3vEK/uzb1vGvvfuJToC/sQ3bwewYCwANOcx6Sj1E6txVroAtrm1uF/jAjXwc3LZnNpCwlIKJHrQfN3Pj0ityI2yP4W"
        },
        {
            "signerId": "KaGnB8iWVpRKBRh+/sAJ0gz1cAZtjhHPufGRgkOXENo=",
            "encryptedKeyshare": "LtqCpResE4Nqefa84ue6xKEvf2tuM6hF7+tFI/yN5FelLH/wkAiH+y7g1/1cCdHX+dJzgb7AttBf1SSjVxTMUni2tSBACgR0zkOv922ykEr1lExVOzBVqi6ojfvm79XemrUdvA3z2SReR/unzkm0EoBkOtircv9w/qqddV0RNLL08oEnqGRIsBY1HdLZVHHU/3eY6CUqI+JFQKXmfSutjfGPkjGJpZrtjEo9zqK5YgTxpxTuiJ5UvLiZggh8bKc87Lvk6y/rTYbCFW3eA92og0n/Ac2aGEIIb9XEDetPnFukcmLxF+tQpzHM40Q6/ksAiauSWd0FGwBh8h0m4l7ilC4aQrM3NduTGKQg9sQltuSXk8Re85VLJv0rFQ3K6lcrsPLDq5cbFvH0QhZ6/yTz0YRDQmw5UWkv0T5cYWTpSU84mTusZGAu0IljXrWdlf/8frtPlALzRl1INEOFZ4om1L/0PeXAjSzLYoGPc/sxtRqXdtId8ViCwApT+P9yOTKHQ0rs/Yon+8ZUaEk+jyb0+jYmNcCMg/2bRxy6YoaFfcoV2BwIe/F30dqKzVn4a57iQIZQnKKtY+yJgzaDPKhXJxydUQkr/oRJjK1HFaIlVnYJj9sBVdybBCGNRKE3T2SAHkgBh5x/Avjzamz1h2o8suM1qmqcjI6/L9z335yD+MQdI/vKhs2jAkOQLMxBrPyeJsUMMQiX/jG9FHme6aBiCmNKttyvZFRiYCUPG+XTpfjhX1VIiIrxt4ggFbARADd8hiWIloaFeD1AsFZftd1S/OCWYZuXbWe6bUJQ9wwdGtP8N1tDy6L/U0ObblxFPTRPSkaG3z53clzn7J2WlhlT2B8OnnBntiugvSX2+IuCgN3Hg1eRv9wKD3PVZU4P1ydF+GBPRTvRQLh3SZkMZZNK092dRu05w3jnw+edvBze86BeGYwpSi1isuJY2eIxIWGzhMhED6AdP5+zwq+WkqzpD6iJlup9DwP5CQ0N1n9MsF40E77f4hPkWBbKrkX+cqNgCSCfDgogiq8PK6UWVgumwK488YSUlEUS2Sy1nJ3ZFOXsOOi7IJ1sV+iy4/5a0Hp4beFvK5TRnq+xH9QwYaxnPO6hZlI5n5NvFp8orjVD4jF74MtEX7+I6lvFCSzI19VbK1CNSZhItv+dXk9TGJzbpSUwC3q9JsRmwOv0B1f9oexCmB05kKx22LDLCneT4ZReYDOSnJrLl4YRFwDANrBRdINla+5WgijOx+EWhkISmvt+EF+eOk3S08MjR8UQAXH/hmG0nhmR6uL5gk/ncaRfArEmZmORyqKzJDrPMcyOSL6mhH2eJnYKsqp+SqxNr0vR"
        },
        {
            "signerId": "ZokM6nUhGXHYhtQYE/NTeBEz5udvx13Ympcd1raQ4Fc=",
            "encryptedKeyshare": "BFDFlHMCoeVQv9/an2GvzJagri6CGscPWdF24jbKvuwSupRcjx/F3UYg1d/Z/aeHcI+lsxNFRnaimFNRm/JuAWOH1lWEgwaBui0NJXWH+QdTyMH8r+/EHuSQzBNNG4SJ4OAFmrG2YsjlbhZn3bGe9tud50IDhr1X56uhyXL1PS+LHZ5q/saVbljtlQiilQtEphpMeR/spNVHfhRcCamYOt/983qFrcapxY3aFVjEfzt7EGsJxYBV6GDGL4u1juqGne0KEz+nL7HYmofRUOUGQqxsr9tjXOQHD4t2ksCKjzWy2NFcXI4GwSVmk9o8u3xca9RdiWuqRtevmxRGf62NtY8SHbV/vsuhlvqyYtcsjYcU/AKGptTATmPdaF39DvQoVVgwhsmH1OhNb8Tuwd7+XWGXphgO4GbWLmJDMV2pG4CWciqukXaobxrspirzUlqP7jr7GiYpD/4zXZYAL3fFeMOMOm0MG/zmhH4PL++PTPEmP678VPNJKF51EG27VLrZIwHNXpU09v5C8mF0V6GZGU2a1OFPzxX0u1Buj3/f5aTpblBAKLOZBMgAM2DV1ug/ecyELtre5Vz39Qski67i6i5g+rpoCAO0HGS7xYsJaO8PeDssxBwiLQNTj9EcfyaGA2AtMHBc3IWBKWx2h3o/W6cGnKDMxV8W0bWu60qU8HLzFm2IyYzlL+IUSThMEPKndOdwWW3JJEl5ucUGDQc/r7ruqawNoCT0EIkIH/J6jr2WlKm0yfLGgDywmhCme+nEaX0Z1VtBCup4rwm05any9iw71kVKZ8CnAKmqWfw9VOLG1VoQ1NU5SkrkRlct4cacJS2/rUUBHmjfGfTEnF8WtMWynNZIk8eQpDZL9sRWDfFLpXS5F0ltTvjuja6PRJT1lzwF2/ABf1Pvii6eMk50+YgSqq3x9jcgZeGB6bfcnOESfDQ1efpMOuNYI/qc8x8aQF2PRnxsLLUWs4SKvKEGuOVyRKq6/cz3leNgl+ghkaxBwRSnuFKrxt0wRbgaoZlMol3pCwV3XOmlp5i1j+pkgBFNPPfSKxRa/lfo5jmMKuBG7BSc5G6b+XeNfrCDipQMrCqGJIUhhlWcFb01DZsa3a7mTezifQ7QHzYRKPiQsQPD5X6WRgKQkynsSbuyrwZWBa/rbxYRu5McmfE4fSwGg/JyHjP0t4H6rtfNTSViqMfLyGkERI9jyVpymLluWdyR0uoAZJz3nH6+tu/QVqCYZMwBDjAHpWkaNUMMR2iHo8TW9zHY1LqcP5wUM4Osc8mMjLQ9NsAa4Zl7fFnOe3G+Az83TGit72cRfHlgD9Uhnr2c+AcRiO/zQYR5QazLwRJZ"
        },
        {
            "signerId": "lGcHWQmdLtJ+4S+RIBFq704/Nox2bugUctVeLL0wPW8=",
            "encryptedKeyshare": "JH7LsR8U92fYjbeUWIuLkJ7Q2yH5X+eQKa6tpk8g/gPkGbgG4JzpyALHK148Xbhr7HN1trQJWhl57NNJnj9UVLxrD0AQ7+23U4Pcl5N9eshva9Npg7ZRI9/PvIfyHzUFzMnsJlk8CzY2O8PyXKObomx4PyTwOUzOUncb3OjHw4aiXt/8DvhwVYRUkuMvvLw6O4yhia6CpD4JGj0p1WtK89UL0981uAEJe76VSQQZwDhpy1UP/aW2/Leej7zj0DVQfNY6YtoTMRjcg5QLeKIOhtf/pDHlos7KWvtjj11pikiISQrdBscMi41PRTv2yJm+SZUoWOrkQNhfm8mOOTLEuH1SvbkJL0mNbSHDSdEWkOJSvx4I/czY97ptwd1sadHVNMG3SNAa/ZRjuWqdOgKgfmSocHZT2SfvnlaZ5EMGW2RK0cqlnqusSENHPHs0QhERD8fpTouER+TJzvIlNVHe0e/PH42muq6aQ4VAQVP4wsVvxlBA53aSMzae9YAKtBPCqfZeXkItdcNmEMdmxQ0/1wm44hswRjieTqqYdvvRuHH2a3ZXlk3KXnlFlBZ3Ve02HSmK4a7/DwrTMmDm8GkdZ0qx2hSBJHiitobqm3wLCy8i6URSkK5oluth8ZTW6vcm9Y230ILiZzvm13jVzPHHl+xuTEUw9AC3lgelapP+4sf2ouYKR1UxKCesnLBuMfRvhlkCwgVuoqbYL/EmnTAw8kXNleQLsQ8jy7F91mGv3FFpAhPEoGoFymNVttmczUjFID+/8k/JdKpxDGC3S+lolKduGgoqLA794WuYkYIlIGU+hX4WHJmGiPSHIATsT/y1pbqYpV1+eYMBJsFRAXP+K/kPX2encKpSCHrLePN0zba9ayQZdMR+bsNHcKGPH94HNtQ4UjziJ9Qfsm+RfwzqgvOzdovKw1qt0NoRHicwFhdx3aQEsSZjmVTL0RmWm89aOvjAiboYlgrEHvuc1S6aySk/5mU58dxMwLtAyyJj1xGm3e9QlsZtD+28uRnbjtRa/mCtQMLv0QLu0Q1wJEPby+FhYX5921Y2h2dz37d3ArOSasuUrY/74sCPuu/olkEFrgyueIPM99IvR1PQbrz57NycZ5HVGuxPyluw82HoDOqKH7h2gKwLV4VNjTRm4IPb0hM/1Yckemx1BXAycD2VNrNbGpDWeYVbDp6OfJqVIFhjiriA6oYITRIDpZCmfGzCDVe9sc9VCeCKIvUu8v6VZg60NoKRfbvAdjERQtLH1KH8fsaUM2zuKojpOAC9OTLDrlnYh69wKZLaBr6t+XPbAjc61AaArNBrNLlsVr7PkD7BtOCIkn19+084YwyXMCFZ"
        },
        {
            "signerId": "9R4OQb12f8PrEQwFmwZ58ZsNHs6EcGQPWF3fSzhXbVk=",
            "encryptedKeyshare": "R9p9N+nXc24eq8osgI2KAQq8OeFXk3OLAxH30oieUfgLEFPcF81eZ89XSKS65axBK6U6DqlZhVW1u2adigJSaVYqHaqDT0xycFL+FCX9Mdd9MgNCoNUorkog7EfYK+It44RZTPP3A8X7CWIsl/GqCX1jH9DFKTYapbbfRsxKr50PyYVyQ4qNH5SypGhtXe10poclbRgYbsroRfclDoCZCaBbkCuSIQvTSb/V2pskv/nw2kbzbGp1WC3POaO0gMHzUnEFc+Zc8kI4XcnsviG2qsdw6GoTzVjNpRSEJf9jpL+DoCplmNufOMKyDqEDwWdgiQwx/Y4ZW3F3tDRZ694lAU4S71ACN3+MwfVy46WJHMW+E6x/OTXvVJUuAAHL4b3C8NcbQS4Z7CP51B6rX6Hl50yUZl6Xev1G2WFrYWLzc02fjdNJHXJtsxeTPZNG4QX91hUkuGVIlbgyJa7m/pb0iTIU9TYEvsdiUKERw/vPv50rXebyDFRy4woQYgfxurafw2zQg6GG9pTbkra7+5Ibuypzu6kggnBNGqHA/Wp52TkOMvkRovtROrt9Nf+F4dsLX9KrqNY06x1HGf97BC8aCp8MMGt995J7kOWcBKH5PbsGyGp1scEuWeWRpFRxaQSB0fAQvWR1DUJawXTcIENWNHOFFtoJiliG9xawcGgRWWHvsiB7QrjfrPRqPrkmw6GDId5wMj1Ln/A6EenuhDrZjRGL1olm3IrC42YV0/o1a0uwuTHmjyOwk7mkIfZeXsGwmF9ydGtdCB/9wDIGgjJOEGL2ZGfiUb8TwlvtiJ4QSaB/k6cTL/JL50NITlYu5BRqJWEqm1NHd5aH67BCPRCklYh/jK+Y8gTE3W4GRXRAt8pAa1E7dgLaQaA5FcB+GtkI7S8ZZ80dr2W2rZfk09oGCY3y8c0cUs+SHnbhtbEeJIuQ9yUqS5I/pWx4CULmImOTvWwBWJ9KgKeCCNgxCLx/xKikC4w/slO3uZyuKEsmsQNWPnAsEvhgQ8mK4IvXVAXYj0qPYGVyRsm6FGb01BuxvHlS5AYrS4p4aXLSelFJ1IOxjJEuKbdaHvnAvXBd5/GHSy1h5I4gBYEZbmlKnYncu3yTXM5PSey0+1a9uHvaB5Asn2Wl9Kuj2BItvGGVl+rewYWisDbi0nMNRGLnfh3Yum+K54jtGkc+ooJ4yOq7OnYbjpZDERMGvcXl6oVBx+eZBMolh1YwuNGrRfvhnaHDg/f4Z8TkedD+kbZ40/Ws/yzfTOLS1F5+odYDYxxxsVIZ4q3w5Xjq5ce7zin3WCRdA7zuuJX9n1Lv+wRYRGi8cSE2YCFUVOzguX/XE7Xmxbsk"
        }
    ]
}
```
