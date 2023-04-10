# TezosTx Template

Use this template to broadcast to Tezos chain.  For more on these fields, see the [official documentation](https://opentezos.com/).

#### Fields <a href="#request-example.1" id="request-example.1"></a>

| Request body fields | Required/Optional | Description                                                                                                                                                                                                                                                                               | Type   |
| ------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `protocol`          | Required          | The specific version of the Tezos protocol being used.                                                                                                                                                                                                                                    | string |
| `chain`             | Required          | Specifies which chain the transaction should be applied to.                                                                                                                                                                                                                               | string |
| `block`             | Required          | Generally the most recent block in the Tezos blockchain at the time of creating the transaction. The reference block is used to determine the current state of the network, such as account balances, nonce values, and other relevant information necessary to validate the transaction. | string |
| `payload`           | Required          | Entrypoint call as specified in [Tezos Basics > Operations](https://opentezos.com/tezos-basics/operations/#tezos-operations).                                                                                                                                                             | object |


### Request examples <a href="#request-example.1" id="request-example.1"></a>

#### Sample request 1 <a href="#sample-request-1" id="sample-request-1"></a>

Cancel delegation and originate a smart contract.

```json
{
  "protocol": "PtMumbai2TmsJHNGRkD8v8YDbtao7BLUC3wjASn1inAKLFCjaH1",
  "chain": "main",
  "block": "head",
  "payload": {
    "branch": "BMd2NF8r7V61jQtA8HPdQ7aFZVxpH8bpY5UD7rWpGuvoXB5RAjv",
    "contents": [
      {
        "kind": "delegation",
        "source": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
        "fee": "375",
        "gas_limit": "1100",
        "storage_limit": "0",
        "counter": "96773511"
      },
      {
        "kind": "origination",
        "fee": "505",
        "gas_limit": "1518",
        "storage_limit": "345",
        "balance": "0",
        "script": {
          "code": [
            {
              "prim": "parameter",
              "args": [
                {
                  "prim": "or",
                  "args": [
                    {
                      "prim": "int",
                      "annots": [
                        "%increment"
                      ]
                    },
                    {
                      "prim": "int",
                      "annots": [
                        "%decrement"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "prim": "storage",
              "args": [
                {
                  "prim": "int"
                }
              ]
            },
            {
              "prim": "code",
              "args": [
                [
                  {
                    "prim": "UNPAIR"
                  },
                  {
                    "prim": "IF_LEFT",
                    "args": [
                      [
                        {
                          "prim": "ADD"
                        }
                      ],
                      [
                        {
                          "prim": "SWAP"
                        },
                        {
                          "prim": "SUB"
                        }
                      ]
                    ]
                  },
                  {
                    "prim": "NIL",
                    "args": [
                      {
                        "prim": "operation"
                      }
                    ]
                  },
                  {
                    "prim": "PAIR"
                  }
                ]
              ]
            }
          ],
          "storage": {
            "int": "0"
          }
        },
        "source": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
        "counter": "96773512"
      }
    ]
  }
}
```

#### Sample response 1 <a href="#sample-response-1" id="sample-response-1"></a>

```json
{
  "hash": "ooiztpzfzs4YmgBGCd73BH9srpT1MydAV95rmRiGegU4YTxzezg",
  "response": {
    "contents": [
      {
        "kind": "delegation",
        "source": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
        "fee": "375",
        "counter": "96773511",
        "gas_limit": "1100",
        "storage_limit": "0",
        "metadata": {
          "balance_updates": [
            {
              "kind": "contract",
              "contract": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
              "change": "-375",
              "origin": "block"
            },
            {
              "kind": "accumulator",
              "category": "block fees",
              "change": "375",
              "origin": "block"
            }
          ],
          "operation_result": {
            "status": "applied",
            "consumed_milligas": "1000000"
          }
        }
      },
      {
        "kind": "origination",
        "source": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
        "fee": "505",
        "counter": "96773512",
        "gas_limit": "1518",
        "storage_limit": "345",
        "balance": "0",
        "script": {
          "code": [
            {
              "prim": "parameter",
              "args": [
                {
                  "prim": "or",
                  "args": [
                    {
                      "prim": "int",
                      "annots": [
                        "%increment"
                      ]
                    },
                    {
                      "prim": "int",
                      "annots": [
                        "%decrement"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "prim": "storage",
              "args": [
                {
                  "prim": "int"
                }
              ]
            },
            {
              "prim": "code",
              "args": [
                [
                  {
                    "prim": "UNPAIR"
                  },
                  {
                    "prim": "IF_LEFT",
                    "args": [
                      [
                        {
                          "prim": "ADD"
                        }
                      ],
                      [
                        {
                          "prim": "SWAP"
                        },
                        {
                          "prim": "SUB"
                        }
                      ]
                    ]
                  },
                  {
                    "prim": "NIL",
                    "args": [
                      {
                        "prim": "operation"
                      }
                    ]
                  },
                  {
                    "prim": "PAIR"
                  }
                ]
              ]
            }
          ],
          "storage": {
            "int": "0"
          }
        },
        "metadata": {
          "balance_updates": [
            {
              "kind": "contract",
              "contract": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
              "change": "-505",
              "origin": "block"
            },
            {
              "kind": "accumulator",
              "category": "block fees",
              "change": "505",
              "origin": "block"
            }
          ],
          "operation_result": {
            "status": "applied",
            "balance_updates": [
              {
                "kind": "contract",
                "contract": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
                "change": "-22000",
                "origin": "block"
              },
              {
                "kind": "burned",
                "category": "storage fees",
                "change": "22000",
                "origin": "block"
              },
              {
                "kind": "contract",
                "contract": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
                "change": "-64250",
                "origin": "block"
              },
              {
                "kind": "burned",
                "category": "storage fees",
                "change": "64250",
                "origin": "block"
              }
            ],
            "originated_contracts": [
              "KT19DRG2xtMWAZKUSBzAxo9cnbfpTCNyPQMa"
            ],
            "consumed_milligas": "1417071",
            "storage_size": "88",
            "paid_storage_size_diff": "88"
          }
        }
      }
    ],
    "signature": "sigoD1LXxB95Vz3LjAdqwnUacmjBzCjfPqUxCicap5hdTmC7JhQRnwxg1tbg991YMBkf2J7Aq6Z2UqKB6MPsoJhf1DeFbYao"
  }
}
```

#### Sample request 2 <a href="#sample-request-2" id="sample-request-2"></a>

Call the smart contract entrypoint.

```json
{
  "protocol": "PtMumbai2TmsJHNGRkD8v8YDbtao7BLUC3wjASn1inAKLFCjaH1",
  "chain": "main",
  "block": "head",
  "payload": {
    "branch": "BMd2NF8r7V61jQtA8HPdQ7aFZVxpH8bpY5UD7rWpGuvoXB5RAjv",
    "contents": [
      {
        "kind": "transaction",
        "fee": "0",
        "gas_limit": "1040000",
        "storage_limit": "11021",
        "amount": "0",
        "destination": "KT19DRG2xtMWAZKUSBzAxo9cnbfpTCNyPQMa",
        "parameters": {
          "entrypoint": "increment",
          "value": {
            "int": "3"
          }
        },
        "source": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
        "counter": "96773513"
      }
    ]
  }
}
```

#### Sample response 2 <a href="#sample-response-2" id="sample-response-2"></a>

```json
{
  "hash": "oogsUr425C3pNginzW9fE3j2UQVFqj46Sy9Se4nfEHHRSMSG8o7",
  "response": {
    "contents": [
      {
        "kind": "transaction",
        "source": "tz2B2bTN5SoCFfzSroEbdETP4Rec7ccAXKdC",
        "fee": "0",
        "counter": "96773513",
        "gas_limit": "1040000",
        "storage_limit": "11021",
        "amount": "0",
        "destination": "KT19DRG2xtMWAZKUSBzAxo9cnbfpTCNyPQMa",
        "parameters": {
          "entrypoint": "increment",
          "value": {
            "int": "3"
          }
        },
        "metadata": {
          "operation_result": {
            "status": "applied",
            "storage": {
              "int": "3"
            },
            "consumed_milligas": "2114406",
            "storage_size": "88"
          }
        }
      }
    ],
    "signature": "sigbhbAaAeyTyYTQvLfzAAqjY88MqEBNQtZ54NqcManJCwwLjRS6GbrBjCNcdVN4vRW2jV9RjaabkryTbGWapFu4ZQs6mufD"
  }
}
```
