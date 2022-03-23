'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreatePolicyRuleInput',
  type: 'object',
  properties: {
    description: { type: 'string' },
    name: { type: 'string' },
    configuration: {
      oneOf: [
        {
          title: 'CreateAmountLimitPrConf',
          type: 'object',
          properties: {
            kind: { type: 'string', const: 'PaymentAmountLimit' },
            limit: { type: 'string' },
            assetSymbol: {
              type: 'string',
              enum: [
                'ADA',
                'ALGO',
                'BCH',
                'BTC',
                'BSV',
                'DOGE',
                'DOT',
                'ETH',
                'EOS',
                'LTC',
                '1INCH.ETH',
                'DAI.ETH',
                'USDT.ETH',
                'USDC.ETH',
                'JEUR.ETH',
                'JCHF.ETH',
                'JGBP.ETH',
                'WBTC.ETH',
                'AAVE.ETH',
                'BAT.ETH',
                'COMP.ETH',
                'LINK.ETH',
                'MKR.ETH',
                'SUSHI.ETH',
                'UNI.ETH',
                'KSM',
                'XLM',
                'XRP',
                'BNB.BSC',
                'MATIC',
                'XTZ',
                'SOL',
                'POLYX',
                'EURL.XTZ',
                'EUR',
                'USD',
                'GBP',
                'CHF',
              ],
            },
            shouldIgnoreAssetsWithoutMarketValue: { type: 'boolean' },
            assetAccountSelectors: {
              title: 'AssetAccountSelector',
              type: 'object',
              properties: {
                assetAccountIds: {
                  type: 'array',
                  items: [{ type: 'string' }],
                  minItems: 0,
                  additionalItems: true,
                },
                tags: {
                  type: 'array',
                  items: [{ type: 'string' }],
                  minItems: 0,
                  additionalItems: true,
                },
                assetSymbols: {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      enum: [
                        'ADA',
                        'ALGO',
                        'BCH',
                        'BTC',
                        'BSV',
                        'DOGE',
                        'DOT',
                        'ETH',
                        'EOS',
                        'LTC',
                        '1INCH.ETH',
                        'DAI.ETH',
                        'USDT.ETH',
                        'USDC.ETH',
                        'JEUR.ETH',
                        'JCHF.ETH',
                        'JGBP.ETH',
                        'WBTC.ETH',
                        'AAVE.ETH',
                        'BAT.ETH',
                        'COMP.ETH',
                        'LINK.ETH',
                        'MKR.ETH',
                        'SUSHI.ETH',
                        'UNI.ETH',
                        'KSM',
                        'XLM',
                        'XRP',
                        'BNB.BSC',
                        'MATIC',
                        'XTZ',
                        'SOL',
                        'POLYX',
                        'EURL.XTZ',
                        'EUR',
                        'USD',
                        'GBP',
                        'CHF',
                      ],
                    },
                  ],
                  minItems: 0,
                  additionalItems: true,
                },
              },
              required: [],
            },
          },
          required: [
            'kind',
            'limit',
            'assetSymbol',
            'shouldIgnoreAssetsWithoutMarketValue',
          ],
        },
        {
          title: 'CreateOutgoingVelocityPrConf',
          type: 'object',
          properties: {
            kind: { type: 'string', const: 'PaymentAmountOutgoingVelocity' },
            velocity: { type: 'string' },
            assetSymbol: {
              type: 'string',
              enum: [
                'ADA',
                'ALGO',
                'BCH',
                'BTC',
                'BSV',
                'DOGE',
                'DOT',
                'ETH',
                'EOS',
                'LTC',
                '1INCH.ETH',
                'DAI.ETH',
                'USDT.ETH',
                'USDC.ETH',
                'JEUR.ETH',
                'JCHF.ETH',
                'JGBP.ETH',
                'WBTC.ETH',
                'AAVE.ETH',
                'BAT.ETH',
                'COMP.ETH',
                'LINK.ETH',
                'MKR.ETH',
                'SUSHI.ETH',
                'UNI.ETH',
                'KSM',
                'XLM',
                'XRP',
                'BNB.BSC',
                'MATIC',
                'XTZ',
                'SOL',
                'POLYX',
                'EURL.XTZ',
                'EUR',
                'USD',
                'GBP',
                'CHF',
              ],
            },
            intervalInMinutes: { type: 'integer' },
            shouldIgnoreAssetsWithoutMarketValue: { type: 'boolean' },
            assetAccountSelectors: {
              title: 'AssetAccountSelector',
              type: 'object',
              properties: {
                assetAccountIds: {
                  type: 'array',
                  items: [{ type: 'string' }],
                  minItems: 0,
                  additionalItems: true,
                },
                tags: {
                  type: 'array',
                  items: [{ type: 'string' }],
                  minItems: 0,
                  additionalItems: true,
                },
                assetSymbols: {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      enum: [
                        'ADA',
                        'ALGO',
                        'BCH',
                        'BTC',
                        'BSV',
                        'DOGE',
                        'DOT',
                        'ETH',
                        'EOS',
                        'LTC',
                        '1INCH.ETH',
                        'DAI.ETH',
                        'USDT.ETH',
                        'USDC.ETH',
                        'JEUR.ETH',
                        'JCHF.ETH',
                        'JGBP.ETH',
                        'WBTC.ETH',
                        'AAVE.ETH',
                        'BAT.ETH',
                        'COMP.ETH',
                        'LINK.ETH',
                        'MKR.ETH',
                        'SUSHI.ETH',
                        'UNI.ETH',
                        'KSM',
                        'XLM',
                        'XRP',
                        'BNB.BSC',
                        'MATIC',
                        'XTZ',
                        'SOL',
                        'POLYX',
                        'EURL.XTZ',
                        'EUR',
                        'USD',
                        'GBP',
                        'CHF',
                      ],
                    },
                  ],
                  minItems: 0,
                  additionalItems: true,
                },
              },
              required: [],
            },
          },
          required: [
            'kind',
            'velocity',
            'assetSymbol',
            'intervalInMinutes',
            'shouldIgnoreAssetsWithoutMarketValue',
          ],
        },
        {
          title: 'CreateSiphoningPrConf',
          type: 'object',
          properties: {
            kind: { type: 'string', const: 'Siphoning' },
            maxTxCount: { type: 'integer' },
            intervalInMinutes: { type: 'integer' },
            assetAcountSelectors: {
              title: 'AssetAccountSelector',
              type: 'object',
              properties: {
                assetAccountIds: {
                  type: 'array',
                  items: [{ type: 'string' }],
                  minItems: 0,
                  additionalItems: true,
                },
                tags: {
                  type: 'array',
                  items: [{ type: 'string' }],
                  minItems: 0,
                  additionalItems: true,
                },
                assetSymbols: {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      enum: [
                        'ADA',
                        'ALGO',
                        'BCH',
                        'BTC',
                        'BSV',
                        'DOGE',
                        'DOT',
                        'ETH',
                        'EOS',
                        'LTC',
                        '1INCH.ETH',
                        'DAI.ETH',
                        'USDT.ETH',
                        'USDC.ETH',
                        'JEUR.ETH',
                        'JCHF.ETH',
                        'JGBP.ETH',
                        'WBTC.ETH',
                        'AAVE.ETH',
                        'BAT.ETH',
                        'COMP.ETH',
                        'LINK.ETH',
                        'MKR.ETH',
                        'SUSHI.ETH',
                        'UNI.ETH',
                        'KSM',
                        'XLM',
                        'XRP',
                        'BNB.BSC',
                        'MATIC',
                        'XTZ',
                        'SOL',
                        'POLYX',
                        'EURL.XTZ',
                        'EUR',
                        'USD',
                        'GBP',
                        'CHF',
                      ],
                    },
                  ],
                  minItems: 0,
                  additionalItems: true,
                },
              },
              required: [],
            },
          },
          required: ['kind', 'maxTxCount', 'intervalInMinutes'],
        },
      ],
    },
    assetAccountSelector: {
      title: 'AssetAccountSelector',
      type: 'object',
      properties: {
        assetAccountIds: {
          type: 'array',
          items: [{ type: 'string' }],
          minItems: 0,
          additionalItems: true,
        },
        tags: {
          type: 'array',
          items: [{ type: 'string' }],
          minItems: 0,
          additionalItems: true,
        },
        assetSymbols: {
          type: 'array',
          items: [
            {
              type: 'string',
              enum: [
                'ADA',
                'ALGO',
                'BCH',
                'BTC',
                'BSV',
                'DOGE',
                'DOT',
                'ETH',
                'EOS',
                'LTC',
                '1INCH.ETH',
                'DAI.ETH',
                'USDT.ETH',
                'USDC.ETH',
                'JEUR.ETH',
                'JCHF.ETH',
                'JGBP.ETH',
                'WBTC.ETH',
                'AAVE.ETH',
                'BAT.ETH',
                'COMP.ETH',
                'LINK.ETH',
                'MKR.ETH',
                'SUSHI.ETH',
                'UNI.ETH',
                'KSM',
                'XLM',
                'XRP',
                'BNB.BSC',
                'MATIC',
                'XTZ',
                'SOL',
                'POLYX',
                'EURL.XTZ',
                'EUR',
                'USD',
                'GBP',
                'CHF',
              ],
            },
          ],
          minItems: 0,
          additionalItems: true,
        },
      },
      required: [],
    },
  },
  required: ['configuration'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreatePolicyRuleInput" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.configuration === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'configuration' },
        message: "must have required property '" + 'configuration' + "'",
      }
      if (vErrors === null) {
        vErrors = [err0]
      } else {
        vErrors.push(err0)
      }
      errors++
    }
    for (const key0 in data) {
      if (
        !(
          key0 === 'description' ||
          key0 === 'name' ||
          key0 === 'configuration' ||
          key0 === 'assetAccountSelector'
        )
      ) {
        const err1 = {
          instancePath,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: key0 },
          message: 'must NOT have additional properties',
        }
        if (vErrors === null) {
          vErrors = [err1]
        } else {
          vErrors.push(err1)
        }
        errors++
      }
    }
    if (data.description !== undefined) {
      if (typeof data.description !== 'string') {
        const err2 = {
          instancePath: instancePath + '/description',
          schemaPath: '#/properties/description/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
        }
        if (vErrors === null) {
          vErrors = [err2]
        } else {
          vErrors.push(err2)
        }
        errors++
      }
    }
    if (data.name !== undefined) {
      if (typeof data.name !== 'string') {
        const err3 = {
          instancePath: instancePath + '/name',
          schemaPath: '#/properties/name/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
        }
        if (vErrors === null) {
          vErrors = [err3]
        } else {
          vErrors.push(err3)
        }
        errors++
      }
    }
    if (data.configuration !== undefined) {
      let data2 = data.configuration
      const _errs7 = errors
      let valid1 = false
      let passing0 = null
      const _errs8 = errors
      if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
        if (data2.kind === undefined) {
          const err4 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'kind' },
            message: "must have required property '" + 'kind' + "'",
          }
          if (vErrors === null) {
            vErrors = [err4]
          } else {
            vErrors.push(err4)
          }
          errors++
        }
        if (data2.limit === undefined) {
          const err5 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'limit' },
            message: "must have required property '" + 'limit' + "'",
          }
          if (vErrors === null) {
            vErrors = [err5]
          } else {
            vErrors.push(err5)
          }
          errors++
        }
        if (data2.assetSymbol === undefined) {
          const err6 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'assetSymbol' },
            message: "must have required property '" + 'assetSymbol' + "'",
          }
          if (vErrors === null) {
            vErrors = [err6]
          } else {
            vErrors.push(err6)
          }
          errors++
        }
        if (data2.shouldIgnoreAssetsWithoutMarketValue === undefined) {
          const err7 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'shouldIgnoreAssetsWithoutMarketValue' },
            message:
              "must have required property '" +
              'shouldIgnoreAssetsWithoutMarketValue' +
              "'",
          }
          if (vErrors === null) {
            vErrors = [err7]
          } else {
            vErrors.push(err7)
          }
          errors++
        }
        if (data2.kind !== undefined) {
          let data3 = data2.kind
          if (typeof data3 !== 'string') {
            const err8 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/kind/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err8]
            } else {
              vErrors.push(err8)
            }
            errors++
          }
          if ('PaymentAmountLimit' !== data3) {
            const err9 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/kind/const',
              keyword: 'const',
              params: { allowedValue: 'PaymentAmountLimit' },
              message: 'must be equal to constant',
            }
            if (vErrors === null) {
              vErrors = [err9]
            } else {
              vErrors.push(err9)
            }
            errors++
          }
        }
        if (data2.limit !== undefined) {
          if (typeof data2.limit !== 'string') {
            const err10 = {
              instancePath: instancePath + '/configuration/limit',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/limit/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err10]
            } else {
              vErrors.push(err10)
            }
            errors++
          }
        }
        if (data2.assetSymbol !== undefined) {
          let data5 = data2.assetSymbol
          if (typeof data5 !== 'string') {
            const err11 = {
              instancePath: instancePath + '/configuration/assetSymbol',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/assetSymbol/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err11]
            } else {
              vErrors.push(err11)
            }
            errors++
          }
          if (
            !(
              data5 === 'ADA' ||
              data5 === 'ALGO' ||
              data5 === 'BCH' ||
              data5 === 'BTC' ||
              data5 === 'BSV' ||
              data5 === 'DOGE' ||
              data5 === 'DOT' ||
              data5 === 'ETH' ||
              data5 === 'EOS' ||
              data5 === 'LTC' ||
              data5 === '1INCH.ETH' ||
              data5 === 'DAI.ETH' ||
              data5 === 'USDT.ETH' ||
              data5 === 'USDC.ETH' ||
              data5 === 'JEUR.ETH' ||
              data5 === 'JCHF.ETH' ||
              data5 === 'JGBP.ETH' ||
              data5 === 'WBTC.ETH' ||
              data5 === 'AAVE.ETH' ||
              data5 === 'BAT.ETH' ||
              data5 === 'COMP.ETH' ||
              data5 === 'LINK.ETH' ||
              data5 === 'MKR.ETH' ||
              data5 === 'SUSHI.ETH' ||
              data5 === 'UNI.ETH' ||
              data5 === 'KSM' ||
              data5 === 'XLM' ||
              data5 === 'XRP' ||
              data5 === 'BNB.BSC' ||
              data5 === 'MATIC' ||
              data5 === 'XTZ' ||
              data5 === 'SOL' ||
              data5 === 'POLYX' ||
              data5 === 'EURL.XTZ' ||
              data5 === 'EUR' ||
              data5 === 'USD' ||
              data5 === 'GBP' ||
              data5 === 'CHF'
            )
          ) {
            const err12 = {
              instancePath: instancePath + '/configuration/assetSymbol',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/assetSymbol/enum',
              keyword: 'enum',
              params: {
                allowedValues:
                  schema11.properties.configuration.oneOf[0].properties
                    .assetSymbol.enum,
              },
              message: 'must be equal to one of the allowed values',
            }
            if (vErrors === null) {
              vErrors = [err12]
            } else {
              vErrors.push(err12)
            }
            errors++
          }
        }
        if (data2.shouldIgnoreAssetsWithoutMarketValue !== undefined) {
          if (typeof data2.shouldIgnoreAssetsWithoutMarketValue !== 'boolean') {
            const err13 = {
              instancePath:
                instancePath +
                '/configuration/shouldIgnoreAssetsWithoutMarketValue',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/shouldIgnoreAssetsWithoutMarketValue/type',
              keyword: 'type',
              params: { type: 'boolean' },
              message: 'must be boolean',
            }
            if (vErrors === null) {
              vErrors = [err13]
            } else {
              vErrors.push(err13)
            }
            errors++
          }
        }
        if (data2.assetAccountSelectors !== undefined) {
          let data7 = data2.assetAccountSelectors
          if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
            if (data7.assetAccountIds !== undefined) {
              let data8 = data7.assetAccountIds
              if (Array.isArray(data8)) {
                if (data8.length < 0) {
                  const err14 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAccountSelectors/assetAccountIds',
                    schemaPath:
                      '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/assetAccountIds/minItems',
                    keyword: 'minItems',
                    params: { limit: 0 },
                    message: 'must NOT have fewer than 0 items',
                  }
                  if (vErrors === null) {
                    vErrors = [err14]
                  } else {
                    vErrors.push(err14)
                  }
                  errors++
                }
                const len1 = data8.length
                if (len1 > 0) {
                  if (typeof data8[0] !== 'string') {
                    const err15 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/assetAccountIds/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/assetAccountIds/items/0/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    }
                    if (vErrors === null) {
                      vErrors = [err15]
                    } else {
                      vErrors.push(err15)
                    }
                    errors++
                  }
                }
              } else {
                const err16 = {
                  instancePath:
                    instancePath +
                    '/configuration/assetAccountSelectors/assetAccountIds',
                  schemaPath:
                    '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/assetAccountIds/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array',
                }
                if (vErrors === null) {
                  vErrors = [err16]
                } else {
                  vErrors.push(err16)
                }
                errors++
              }
            }
            if (data7.tags !== undefined) {
              let data10 = data7.tags
              if (Array.isArray(data10)) {
                if (data10.length < 0) {
                  const err17 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAccountSelectors/tags',
                    schemaPath:
                      '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/tags/minItems',
                    keyword: 'minItems',
                    params: { limit: 0 },
                    message: 'must NOT have fewer than 0 items',
                  }
                  if (vErrors === null) {
                    vErrors = [err17]
                  } else {
                    vErrors.push(err17)
                  }
                  errors++
                }
                const len3 = data10.length
                if (len3 > 0) {
                  if (typeof data10[0] !== 'string') {
                    const err18 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/tags/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/tags/items/0/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    }
                    if (vErrors === null) {
                      vErrors = [err18]
                    } else {
                      vErrors.push(err18)
                    }
                    errors++
                  }
                }
              } else {
                const err19 = {
                  instancePath:
                    instancePath + '/configuration/assetAccountSelectors/tags',
                  schemaPath:
                    '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/tags/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array',
                }
                if (vErrors === null) {
                  vErrors = [err19]
                } else {
                  vErrors.push(err19)
                }
                errors++
              }
            }
            if (data7.assetSymbols !== undefined) {
              let data12 = data7.assetSymbols
              if (Array.isArray(data12)) {
                if (data12.length < 0) {
                  const err20 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAccountSelectors/assetSymbols',
                    schemaPath:
                      '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/assetSymbols/minItems',
                    keyword: 'minItems',
                    params: { limit: 0 },
                    message: 'must NOT have fewer than 0 items',
                  }
                  if (vErrors === null) {
                    vErrors = [err20]
                  } else {
                    vErrors.push(err20)
                  }
                  errors++
                }
                const len5 = data12.length
                if (len5 > 0) {
                  let data13 = data12[0]
                  if (typeof data13 !== 'string') {
                    const err21 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/assetSymbols/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/assetSymbols/items/0/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    }
                    if (vErrors === null) {
                      vErrors = [err21]
                    } else {
                      vErrors.push(err21)
                    }
                    errors++
                  }
                  if (
                    !(
                      data13 === 'ADA' ||
                      data13 === 'ALGO' ||
                      data13 === 'BCH' ||
                      data13 === 'BTC' ||
                      data13 === 'BSV' ||
                      data13 === 'DOGE' ||
                      data13 === 'DOT' ||
                      data13 === 'ETH' ||
                      data13 === 'EOS' ||
                      data13 === 'LTC' ||
                      data13 === '1INCH.ETH' ||
                      data13 === 'DAI.ETH' ||
                      data13 === 'USDT.ETH' ||
                      data13 === 'USDC.ETH' ||
                      data13 === 'JEUR.ETH' ||
                      data13 === 'JCHF.ETH' ||
                      data13 === 'JGBP.ETH' ||
                      data13 === 'WBTC.ETH' ||
                      data13 === 'AAVE.ETH' ||
                      data13 === 'BAT.ETH' ||
                      data13 === 'COMP.ETH' ||
                      data13 === 'LINK.ETH' ||
                      data13 === 'MKR.ETH' ||
                      data13 === 'SUSHI.ETH' ||
                      data13 === 'UNI.ETH' ||
                      data13 === 'KSM' ||
                      data13 === 'XLM' ||
                      data13 === 'XRP' ||
                      data13 === 'BNB.BSC' ||
                      data13 === 'MATIC' ||
                      data13 === 'XTZ' ||
                      data13 === 'SOL' ||
                      data13 === 'POLYX' ||
                      data13 === 'EURL.XTZ' ||
                      data13 === 'EUR' ||
                      data13 === 'USD' ||
                      data13 === 'GBP' ||
                      data13 === 'CHF'
                    )
                  ) {
                    const err22 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/assetSymbols/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/assetSymbols/items/0/enum',
                      keyword: 'enum',
                      params: {
                        allowedValues:
                          schema11.properties.configuration.oneOf[0].properties
                            .assetAccountSelectors.properties.assetSymbols
                            .items[0].enum,
                      },
                      message: 'must be equal to one of the allowed values',
                    }
                    if (vErrors === null) {
                      vErrors = [err22]
                    } else {
                      vErrors.push(err22)
                    }
                    errors++
                  }
                }
              } else {
                const err23 = {
                  instancePath:
                    instancePath +
                    '/configuration/assetAccountSelectors/assetSymbols',
                  schemaPath:
                    '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/properties/assetSymbols/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array',
                }
                if (vErrors === null) {
                  vErrors = [err23]
                } else {
                  vErrors.push(err23)
                }
                errors++
              }
            }
          } else {
            const err24 = {
              instancePath:
                instancePath + '/configuration/assetAccountSelectors',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/assetAccountSelectors/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            }
            if (vErrors === null) {
              vErrors = [err24]
            } else {
              vErrors.push(err24)
            }
            errors++
          }
        }
      } else {
        const err25 = {
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf/0/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        if (vErrors === null) {
          vErrors = [err25]
        } else {
          vErrors.push(err25)
        }
        errors++
      }
      var _valid0 = _errs8 === errors
      if (_valid0) {
        valid1 = true
        passing0 = 0
      }
      const _errs32 = errors
      if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
        if (data2.kind === undefined) {
          const err26 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'kind' },
            message: "must have required property '" + 'kind' + "'",
          }
          if (vErrors === null) {
            vErrors = [err26]
          } else {
            vErrors.push(err26)
          }
          errors++
        }
        if (data2.velocity === undefined) {
          const err27 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'velocity' },
            message: "must have required property '" + 'velocity' + "'",
          }
          if (vErrors === null) {
            vErrors = [err27]
          } else {
            vErrors.push(err27)
          }
          errors++
        }
        if (data2.assetSymbol === undefined) {
          const err28 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'assetSymbol' },
            message: "must have required property '" + 'assetSymbol' + "'",
          }
          if (vErrors === null) {
            vErrors = [err28]
          } else {
            vErrors.push(err28)
          }
          errors++
        }
        if (data2.intervalInMinutes === undefined) {
          const err29 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'intervalInMinutes' },
            message:
              "must have required property '" + 'intervalInMinutes' + "'",
          }
          if (vErrors === null) {
            vErrors = [err29]
          } else {
            vErrors.push(err29)
          }
          errors++
        }
        if (data2.shouldIgnoreAssetsWithoutMarketValue === undefined) {
          const err30 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'shouldIgnoreAssetsWithoutMarketValue' },
            message:
              "must have required property '" +
              'shouldIgnoreAssetsWithoutMarketValue' +
              "'",
          }
          if (vErrors === null) {
            vErrors = [err30]
          } else {
            vErrors.push(err30)
          }
          errors++
        }
        if (data2.kind !== undefined) {
          let data14 = data2.kind
          if (typeof data14 !== 'string') {
            const err31 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/kind/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err31]
            } else {
              vErrors.push(err31)
            }
            errors++
          }
          if ('PaymentAmountOutgoingVelocity' !== data14) {
            const err32 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/kind/const',
              keyword: 'const',
              params: { allowedValue: 'PaymentAmountOutgoingVelocity' },
              message: 'must be equal to constant',
            }
            if (vErrors === null) {
              vErrors = [err32]
            } else {
              vErrors.push(err32)
            }
            errors++
          }
        }
        if (data2.velocity !== undefined) {
          if (typeof data2.velocity !== 'string') {
            const err33 = {
              instancePath: instancePath + '/configuration/velocity',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/velocity/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err33]
            } else {
              vErrors.push(err33)
            }
            errors++
          }
        }
        if (data2.assetSymbol !== undefined) {
          let data16 = data2.assetSymbol
          if (typeof data16 !== 'string') {
            const err34 = {
              instancePath: instancePath + '/configuration/assetSymbol',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/assetSymbol/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err34]
            } else {
              vErrors.push(err34)
            }
            errors++
          }
          if (
            !(
              data16 === 'ADA' ||
              data16 === 'ALGO' ||
              data16 === 'BCH' ||
              data16 === 'BTC' ||
              data16 === 'BSV' ||
              data16 === 'DOGE' ||
              data16 === 'DOT' ||
              data16 === 'ETH' ||
              data16 === 'EOS' ||
              data16 === 'LTC' ||
              data16 === '1INCH.ETH' ||
              data16 === 'DAI.ETH' ||
              data16 === 'USDT.ETH' ||
              data16 === 'USDC.ETH' ||
              data16 === 'JEUR.ETH' ||
              data16 === 'JCHF.ETH' ||
              data16 === 'JGBP.ETH' ||
              data16 === 'WBTC.ETH' ||
              data16 === 'AAVE.ETH' ||
              data16 === 'BAT.ETH' ||
              data16 === 'COMP.ETH' ||
              data16 === 'LINK.ETH' ||
              data16 === 'MKR.ETH' ||
              data16 === 'SUSHI.ETH' ||
              data16 === 'UNI.ETH' ||
              data16 === 'KSM' ||
              data16 === 'XLM' ||
              data16 === 'XRP' ||
              data16 === 'BNB.BSC' ||
              data16 === 'MATIC' ||
              data16 === 'XTZ' ||
              data16 === 'SOL' ||
              data16 === 'POLYX' ||
              data16 === 'EURL.XTZ' ||
              data16 === 'EUR' ||
              data16 === 'USD' ||
              data16 === 'GBP' ||
              data16 === 'CHF'
            )
          ) {
            const err35 = {
              instancePath: instancePath + '/configuration/assetSymbol',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/assetSymbol/enum',
              keyword: 'enum',
              params: {
                allowedValues:
                  schema11.properties.configuration.oneOf[1].properties
                    .assetSymbol.enum,
              },
              message: 'must be equal to one of the allowed values',
            }
            if (vErrors === null) {
              vErrors = [err35]
            } else {
              vErrors.push(err35)
            }
            errors++
          }
        }
        if (data2.intervalInMinutes !== undefined) {
          let data17 = data2.intervalInMinutes
          if (!(typeof data17 == 'number' && !(data17 % 1) && !isNaN(data17))) {
            const err36 = {
              instancePath: instancePath + '/configuration/intervalInMinutes',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/intervalInMinutes/type',
              keyword: 'type',
              params: { type: 'integer' },
              message: 'must be integer',
            }
            if (vErrors === null) {
              vErrors = [err36]
            } else {
              vErrors.push(err36)
            }
            errors++
          }
        }
        if (data2.shouldIgnoreAssetsWithoutMarketValue !== undefined) {
          if (typeof data2.shouldIgnoreAssetsWithoutMarketValue !== 'boolean') {
            const err37 = {
              instancePath:
                instancePath +
                '/configuration/shouldIgnoreAssetsWithoutMarketValue',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/shouldIgnoreAssetsWithoutMarketValue/type',
              keyword: 'type',
              params: { type: 'boolean' },
              message: 'must be boolean',
            }
            if (vErrors === null) {
              vErrors = [err37]
            } else {
              vErrors.push(err37)
            }
            errors++
          }
        }
        if (data2.assetAccountSelectors !== undefined) {
          let data19 = data2.assetAccountSelectors
          if (data19 && typeof data19 == 'object' && !Array.isArray(data19)) {
            if (data19.assetAccountIds !== undefined) {
              let data20 = data19.assetAccountIds
              if (Array.isArray(data20)) {
                if (data20.length < 0) {
                  const err38 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAccountSelectors/assetAccountIds',
                    schemaPath:
                      '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/assetAccountIds/minItems',
                    keyword: 'minItems',
                    params: { limit: 0 },
                    message: 'must NOT have fewer than 0 items',
                  }
                  if (vErrors === null) {
                    vErrors = [err38]
                  } else {
                    vErrors.push(err38)
                  }
                  errors++
                }
                const len7 = data20.length
                if (len7 > 0) {
                  if (typeof data20[0] !== 'string') {
                    const err39 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/assetAccountIds/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/assetAccountIds/items/0/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    }
                    if (vErrors === null) {
                      vErrors = [err39]
                    } else {
                      vErrors.push(err39)
                    }
                    errors++
                  }
                }
              } else {
                const err40 = {
                  instancePath:
                    instancePath +
                    '/configuration/assetAccountSelectors/assetAccountIds',
                  schemaPath:
                    '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/assetAccountIds/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array',
                }
                if (vErrors === null) {
                  vErrors = [err40]
                } else {
                  vErrors.push(err40)
                }
                errors++
              }
            }
            if (data19.tags !== undefined) {
              let data22 = data19.tags
              if (Array.isArray(data22)) {
                if (data22.length < 0) {
                  const err41 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAccountSelectors/tags',
                    schemaPath:
                      '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/tags/minItems',
                    keyword: 'minItems',
                    params: { limit: 0 },
                    message: 'must NOT have fewer than 0 items',
                  }
                  if (vErrors === null) {
                    vErrors = [err41]
                  } else {
                    vErrors.push(err41)
                  }
                  errors++
                }
                const len9 = data22.length
                if (len9 > 0) {
                  if (typeof data22[0] !== 'string') {
                    const err42 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/tags/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/tags/items/0/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    }
                    if (vErrors === null) {
                      vErrors = [err42]
                    } else {
                      vErrors.push(err42)
                    }
                    errors++
                  }
                }
              } else {
                const err43 = {
                  instancePath:
                    instancePath + '/configuration/assetAccountSelectors/tags',
                  schemaPath:
                    '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/tags/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array',
                }
                if (vErrors === null) {
                  vErrors = [err43]
                } else {
                  vErrors.push(err43)
                }
                errors++
              }
            }
            if (data19.assetSymbols !== undefined) {
              let data24 = data19.assetSymbols
              if (Array.isArray(data24)) {
                if (data24.length < 0) {
                  const err44 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAccountSelectors/assetSymbols',
                    schemaPath:
                      '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/assetSymbols/minItems',
                    keyword: 'minItems',
                    params: { limit: 0 },
                    message: 'must NOT have fewer than 0 items',
                  }
                  if (vErrors === null) {
                    vErrors = [err44]
                  } else {
                    vErrors.push(err44)
                  }
                  errors++
                }
                const len11 = data24.length
                if (len11 > 0) {
                  let data25 = data24[0]
                  if (typeof data25 !== 'string') {
                    const err45 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/assetSymbols/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/assetSymbols/items/0/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    }
                    if (vErrors === null) {
                      vErrors = [err45]
                    } else {
                      vErrors.push(err45)
                    }
                    errors++
                  }
                  if (
                    !(
                      data25 === 'ADA' ||
                      data25 === 'ALGO' ||
                      data25 === 'BCH' ||
                      data25 === 'BTC' ||
                      data25 === 'BSV' ||
                      data25 === 'DOGE' ||
                      data25 === 'DOT' ||
                      data25 === 'ETH' ||
                      data25 === 'EOS' ||
                      data25 === 'LTC' ||
                      data25 === '1INCH.ETH' ||
                      data25 === 'DAI.ETH' ||
                      data25 === 'USDT.ETH' ||
                      data25 === 'USDC.ETH' ||
                      data25 === 'JEUR.ETH' ||
                      data25 === 'JCHF.ETH' ||
                      data25 === 'JGBP.ETH' ||
                      data25 === 'WBTC.ETH' ||
                      data25 === 'AAVE.ETH' ||
                      data25 === 'BAT.ETH' ||
                      data25 === 'COMP.ETH' ||
                      data25 === 'LINK.ETH' ||
                      data25 === 'MKR.ETH' ||
                      data25 === 'SUSHI.ETH' ||
                      data25 === 'UNI.ETH' ||
                      data25 === 'KSM' ||
                      data25 === 'XLM' ||
                      data25 === 'XRP' ||
                      data25 === 'BNB.BSC' ||
                      data25 === 'MATIC' ||
                      data25 === 'XTZ' ||
                      data25 === 'SOL' ||
                      data25 === 'POLYX' ||
                      data25 === 'EURL.XTZ' ||
                      data25 === 'EUR' ||
                      data25 === 'USD' ||
                      data25 === 'GBP' ||
                      data25 === 'CHF'
                    )
                  ) {
                    const err46 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAccountSelectors/assetSymbols/0',
                      schemaPath:
                        '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/assetSymbols/items/0/enum',
                      keyword: 'enum',
                      params: {
                        allowedValues:
                          schema11.properties.configuration.oneOf[1].properties
                            .assetAccountSelectors.properties.assetSymbols
                            .items[0].enum,
                      },
                      message: 'must be equal to one of the allowed values',
                    }
                    if (vErrors === null) {
                      vErrors = [err46]
                    } else {
                      vErrors.push(err46)
                    }
                    errors++
                  }
                }
              } else {
                const err47 = {
                  instancePath:
                    instancePath +
                    '/configuration/assetAccountSelectors/assetSymbols',
                  schemaPath:
                    '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/properties/assetSymbols/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array',
                }
                if (vErrors === null) {
                  vErrors = [err47]
                } else {
                  vErrors.push(err47)
                }
                errors++
              }
            }
          } else {
            const err48 = {
              instancePath:
                instancePath + '/configuration/assetAccountSelectors',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/assetAccountSelectors/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            }
            if (vErrors === null) {
              vErrors = [err48]
            } else {
              vErrors.push(err48)
            }
            errors++
          }
        }
      } else {
        const err49 = {
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf/1/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        if (vErrors === null) {
          vErrors = [err49]
        } else {
          vErrors.push(err49)
        }
        errors++
      }
      var _valid0 = _errs32 === errors
      if (_valid0 && valid1) {
        valid1 = false
        passing0 = [passing0, 1]
      } else {
        if (_valid0) {
          valid1 = true
          passing0 = 1
        }
        const _errs58 = errors
        if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
          if (data2.kind === undefined) {
            const err50 = {
              instancePath: instancePath + '/configuration',
              schemaPath: '#/properties/configuration/oneOf/2/required',
              keyword: 'required',
              params: { missingProperty: 'kind' },
              message: "must have required property '" + 'kind' + "'",
            }
            if (vErrors === null) {
              vErrors = [err50]
            } else {
              vErrors.push(err50)
            }
            errors++
          }
          if (data2.maxTxCount === undefined) {
            const err51 = {
              instancePath: instancePath + '/configuration',
              schemaPath: '#/properties/configuration/oneOf/2/required',
              keyword: 'required',
              params: { missingProperty: 'maxTxCount' },
              message: "must have required property '" + 'maxTxCount' + "'",
            }
            if (vErrors === null) {
              vErrors = [err51]
            } else {
              vErrors.push(err51)
            }
            errors++
          }
          if (data2.intervalInMinutes === undefined) {
            const err52 = {
              instancePath: instancePath + '/configuration',
              schemaPath: '#/properties/configuration/oneOf/2/required',
              keyword: 'required',
              params: { missingProperty: 'intervalInMinutes' },
              message:
                "must have required property '" + 'intervalInMinutes' + "'",
            }
            if (vErrors === null) {
              vErrors = [err52]
            } else {
              vErrors.push(err52)
            }
            errors++
          }
          if (data2.kind !== undefined) {
            let data26 = data2.kind
            if (typeof data26 !== 'string') {
              const err53 = {
                instancePath: instancePath + '/configuration/kind',
                schemaPath:
                  '#/properties/configuration/oneOf/2/properties/kind/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              }
              if (vErrors === null) {
                vErrors = [err53]
              } else {
                vErrors.push(err53)
              }
              errors++
            }
            if ('Siphoning' !== data26) {
              const err54 = {
                instancePath: instancePath + '/configuration/kind',
                schemaPath:
                  '#/properties/configuration/oneOf/2/properties/kind/const',
                keyword: 'const',
                params: { allowedValue: 'Siphoning' },
                message: 'must be equal to constant',
              }
              if (vErrors === null) {
                vErrors = [err54]
              } else {
                vErrors.push(err54)
              }
              errors++
            }
          }
          if (data2.maxTxCount !== undefined) {
            let data27 = data2.maxTxCount
            if (
              !(typeof data27 == 'number' && !(data27 % 1) && !isNaN(data27))
            ) {
              const err55 = {
                instancePath: instancePath + '/configuration/maxTxCount',
                schemaPath:
                  '#/properties/configuration/oneOf/2/properties/maxTxCount/type',
                keyword: 'type',
                params: { type: 'integer' },
                message: 'must be integer',
              }
              if (vErrors === null) {
                vErrors = [err55]
              } else {
                vErrors.push(err55)
              }
              errors++
            }
          }
          if (data2.intervalInMinutes !== undefined) {
            let data28 = data2.intervalInMinutes
            if (
              !(typeof data28 == 'number' && !(data28 % 1) && !isNaN(data28))
            ) {
              const err56 = {
                instancePath: instancePath + '/configuration/intervalInMinutes',
                schemaPath:
                  '#/properties/configuration/oneOf/2/properties/intervalInMinutes/type',
                keyword: 'type',
                params: { type: 'integer' },
                message: 'must be integer',
              }
              if (vErrors === null) {
                vErrors = [err56]
              } else {
                vErrors.push(err56)
              }
              errors++
            }
          }
          if (data2.assetAcountSelectors !== undefined) {
            let data29 = data2.assetAcountSelectors
            if (data29 && typeof data29 == 'object' && !Array.isArray(data29)) {
              if (data29.assetAccountIds !== undefined) {
                let data30 = data29.assetAccountIds
                if (Array.isArray(data30)) {
                  if (data30.length < 0) {
                    const err57 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAcountSelectors/assetAccountIds',
                      schemaPath:
                        '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/assetAccountIds/minItems',
                      keyword: 'minItems',
                      params: { limit: 0 },
                      message: 'must NOT have fewer than 0 items',
                    }
                    if (vErrors === null) {
                      vErrors = [err57]
                    } else {
                      vErrors.push(err57)
                    }
                    errors++
                  }
                  const len13 = data30.length
                  if (len13 > 0) {
                    if (typeof data30[0] !== 'string') {
                      const err58 = {
                        instancePath:
                          instancePath +
                          '/configuration/assetAcountSelectors/assetAccountIds/0',
                        schemaPath:
                          '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/assetAccountIds/items/0/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      }
                      if (vErrors === null) {
                        vErrors = [err58]
                      } else {
                        vErrors.push(err58)
                      }
                      errors++
                    }
                  }
                } else {
                  const err59 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAcountSelectors/assetAccountIds',
                    schemaPath:
                      '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/assetAccountIds/type',
                    keyword: 'type',
                    params: { type: 'array' },
                    message: 'must be array',
                  }
                  if (vErrors === null) {
                    vErrors = [err59]
                  } else {
                    vErrors.push(err59)
                  }
                  errors++
                }
              }
              if (data29.tags !== undefined) {
                let data32 = data29.tags
                if (Array.isArray(data32)) {
                  if (data32.length < 0) {
                    const err60 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAcountSelectors/tags',
                      schemaPath:
                        '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/tags/minItems',
                      keyword: 'minItems',
                      params: { limit: 0 },
                      message: 'must NOT have fewer than 0 items',
                    }
                    if (vErrors === null) {
                      vErrors = [err60]
                    } else {
                      vErrors.push(err60)
                    }
                    errors++
                  }
                  const len15 = data32.length
                  if (len15 > 0) {
                    if (typeof data32[0] !== 'string') {
                      const err61 = {
                        instancePath:
                          instancePath +
                          '/configuration/assetAcountSelectors/tags/0',
                        schemaPath:
                          '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/tags/items/0/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      }
                      if (vErrors === null) {
                        vErrors = [err61]
                      } else {
                        vErrors.push(err61)
                      }
                      errors++
                    }
                  }
                } else {
                  const err62 = {
                    instancePath:
                      instancePath + '/configuration/assetAcountSelectors/tags',
                    schemaPath:
                      '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/tags/type',
                    keyword: 'type',
                    params: { type: 'array' },
                    message: 'must be array',
                  }
                  if (vErrors === null) {
                    vErrors = [err62]
                  } else {
                    vErrors.push(err62)
                  }
                  errors++
                }
              }
              if (data29.assetSymbols !== undefined) {
                let data34 = data29.assetSymbols
                if (Array.isArray(data34)) {
                  if (data34.length < 0) {
                    const err63 = {
                      instancePath:
                        instancePath +
                        '/configuration/assetAcountSelectors/assetSymbols',
                      schemaPath:
                        '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/assetSymbols/minItems',
                      keyword: 'minItems',
                      params: { limit: 0 },
                      message: 'must NOT have fewer than 0 items',
                    }
                    if (vErrors === null) {
                      vErrors = [err63]
                    } else {
                      vErrors.push(err63)
                    }
                    errors++
                  }
                  const len17 = data34.length
                  if (len17 > 0) {
                    let data35 = data34[0]
                    if (typeof data35 !== 'string') {
                      const err64 = {
                        instancePath:
                          instancePath +
                          '/configuration/assetAcountSelectors/assetSymbols/0',
                        schemaPath:
                          '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/assetSymbols/items/0/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      }
                      if (vErrors === null) {
                        vErrors = [err64]
                      } else {
                        vErrors.push(err64)
                      }
                      errors++
                    }
                    if (
                      !(
                        data35 === 'ADA' ||
                        data35 === 'ALGO' ||
                        data35 === 'BCH' ||
                        data35 === 'BTC' ||
                        data35 === 'BSV' ||
                        data35 === 'DOGE' ||
                        data35 === 'DOT' ||
                        data35 === 'ETH' ||
                        data35 === 'EOS' ||
                        data35 === 'LTC' ||
                        data35 === '1INCH.ETH' ||
                        data35 === 'DAI.ETH' ||
                        data35 === 'USDT.ETH' ||
                        data35 === 'USDC.ETH' ||
                        data35 === 'JEUR.ETH' ||
                        data35 === 'JCHF.ETH' ||
                        data35 === 'JGBP.ETH' ||
                        data35 === 'WBTC.ETH' ||
                        data35 === 'AAVE.ETH' ||
                        data35 === 'BAT.ETH' ||
                        data35 === 'COMP.ETH' ||
                        data35 === 'LINK.ETH' ||
                        data35 === 'MKR.ETH' ||
                        data35 === 'SUSHI.ETH' ||
                        data35 === 'UNI.ETH' ||
                        data35 === 'KSM' ||
                        data35 === 'XLM' ||
                        data35 === 'XRP' ||
                        data35 === 'BNB.BSC' ||
                        data35 === 'MATIC' ||
                        data35 === 'XTZ' ||
                        data35 === 'SOL' ||
                        data35 === 'POLYX' ||
                        data35 === 'EURL.XTZ' ||
                        data35 === 'EUR' ||
                        data35 === 'USD' ||
                        data35 === 'GBP' ||
                        data35 === 'CHF'
                      )
                    ) {
                      const err65 = {
                        instancePath:
                          instancePath +
                          '/configuration/assetAcountSelectors/assetSymbols/0',
                        schemaPath:
                          '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/assetSymbols/items/0/enum',
                        keyword: 'enum',
                        params: {
                          allowedValues:
                            schema11.properties.configuration.oneOf[2]
                              .properties.assetAcountSelectors.properties
                              .assetSymbols.items[0].enum,
                        },
                        message: 'must be equal to one of the allowed values',
                      }
                      if (vErrors === null) {
                        vErrors = [err65]
                      } else {
                        vErrors.push(err65)
                      }
                      errors++
                    }
                  }
                } else {
                  const err66 = {
                    instancePath:
                      instancePath +
                      '/configuration/assetAcountSelectors/assetSymbols',
                    schemaPath:
                      '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/properties/assetSymbols/type',
                    keyword: 'type',
                    params: { type: 'array' },
                    message: 'must be array',
                  }
                  if (vErrors === null) {
                    vErrors = [err66]
                  } else {
                    vErrors.push(err66)
                  }
                  errors++
                }
              }
            } else {
              const err67 = {
                instancePath:
                  instancePath + '/configuration/assetAcountSelectors',
                schemaPath:
                  '#/properties/configuration/oneOf/2/properties/assetAcountSelectors/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              }
              if (vErrors === null) {
                vErrors = [err67]
              } else {
                vErrors.push(err67)
              }
              errors++
            }
          }
        } else {
          const err68 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/2/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          }
          if (vErrors === null) {
            vErrors = [err68]
          } else {
            vErrors.push(err68)
          }
          errors++
        }
        var _valid0 = _errs58 === errors
        if (_valid0 && valid1) {
          valid1 = false
          passing0 = [passing0, 2]
        } else {
          if (_valid0) {
            valid1 = true
            passing0 = 2
          }
        }
      }
      if (!valid1) {
        const err69 = {
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf',
          keyword: 'oneOf',
          params: { passingSchemas: passing0 },
          message: 'must match exactly one schema in oneOf',
        }
        if (vErrors === null) {
          vErrors = [err69]
        } else {
          vErrors.push(err69)
        }
        errors++
      } else {
        errors = _errs7
        if (vErrors !== null) {
          if (_errs7) {
            vErrors.length = _errs7
          } else {
            vErrors = null
          }
        }
      }
    }
    if (data.assetAccountSelector !== undefined) {
      let data36 = data.assetAccountSelector
      if (data36 && typeof data36 == 'object' && !Array.isArray(data36)) {
        if (data36.assetAccountIds !== undefined) {
          let data37 = data36.assetAccountIds
          if (Array.isArray(data37)) {
            if (data37.length < 0) {
              const err70 = {
                instancePath:
                  instancePath + '/assetAccountSelector/assetAccountIds',
                schemaPath:
                  '#/properties/assetAccountSelector/properties/assetAccountIds/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err70]
              } else {
                vErrors.push(err70)
              }
              errors++
            }
            const len19 = data37.length
            if (len19 > 0) {
              if (typeof data37[0] !== 'string') {
                const err71 = {
                  instancePath:
                    instancePath + '/assetAccountSelector/assetAccountIds/0',
                  schemaPath:
                    '#/properties/assetAccountSelector/properties/assetAccountIds/items/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                }
                if (vErrors === null) {
                  vErrors = [err71]
                } else {
                  vErrors.push(err71)
                }
                errors++
              }
            }
          } else {
            const err72 = {
              instancePath:
                instancePath + '/assetAccountSelector/assetAccountIds',
              schemaPath:
                '#/properties/assetAccountSelector/properties/assetAccountIds/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err72]
            } else {
              vErrors.push(err72)
            }
            errors++
          }
        }
        if (data36.tags !== undefined) {
          let data39 = data36.tags
          if (Array.isArray(data39)) {
            if (data39.length < 0) {
              const err73 = {
                instancePath: instancePath + '/assetAccountSelector/tags',
                schemaPath:
                  '#/properties/assetAccountSelector/properties/tags/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err73]
              } else {
                vErrors.push(err73)
              }
              errors++
            }
            const len21 = data39.length
            if (len21 > 0) {
              if (typeof data39[0] !== 'string') {
                const err74 = {
                  instancePath: instancePath + '/assetAccountSelector/tags/0',
                  schemaPath:
                    '#/properties/assetAccountSelector/properties/tags/items/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                }
                if (vErrors === null) {
                  vErrors = [err74]
                } else {
                  vErrors.push(err74)
                }
                errors++
              }
            }
          } else {
            const err75 = {
              instancePath: instancePath + '/assetAccountSelector/tags',
              schemaPath:
                '#/properties/assetAccountSelector/properties/tags/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err75]
            } else {
              vErrors.push(err75)
            }
            errors++
          }
        }
        if (data36.assetSymbols !== undefined) {
          let data41 = data36.assetSymbols
          if (Array.isArray(data41)) {
            if (data41.length < 0) {
              const err76 = {
                instancePath:
                  instancePath + '/assetAccountSelector/assetSymbols',
                schemaPath:
                  '#/properties/assetAccountSelector/properties/assetSymbols/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err76]
              } else {
                vErrors.push(err76)
              }
              errors++
            }
            const len23 = data41.length
            if (len23 > 0) {
              let data42 = data41[0]
              if (typeof data42 !== 'string') {
                const err77 = {
                  instancePath:
                    instancePath + '/assetAccountSelector/assetSymbols/0',
                  schemaPath:
                    '#/properties/assetAccountSelector/properties/assetSymbols/items/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                }
                if (vErrors === null) {
                  vErrors = [err77]
                } else {
                  vErrors.push(err77)
                }
                errors++
              }
              if (
                !(
                  data42 === 'ADA' ||
                  data42 === 'ALGO' ||
                  data42 === 'BCH' ||
                  data42 === 'BTC' ||
                  data42 === 'BSV' ||
                  data42 === 'DOGE' ||
                  data42 === 'DOT' ||
                  data42 === 'ETH' ||
                  data42 === 'EOS' ||
                  data42 === 'LTC' ||
                  data42 === '1INCH.ETH' ||
                  data42 === 'DAI.ETH' ||
                  data42 === 'USDT.ETH' ||
                  data42 === 'USDC.ETH' ||
                  data42 === 'JEUR.ETH' ||
                  data42 === 'JCHF.ETH' ||
                  data42 === 'JGBP.ETH' ||
                  data42 === 'WBTC.ETH' ||
                  data42 === 'AAVE.ETH' ||
                  data42 === 'BAT.ETH' ||
                  data42 === 'COMP.ETH' ||
                  data42 === 'LINK.ETH' ||
                  data42 === 'MKR.ETH' ||
                  data42 === 'SUSHI.ETH' ||
                  data42 === 'UNI.ETH' ||
                  data42 === 'KSM' ||
                  data42 === 'XLM' ||
                  data42 === 'XRP' ||
                  data42 === 'BNB.BSC' ||
                  data42 === 'MATIC' ||
                  data42 === 'XTZ' ||
                  data42 === 'SOL' ||
                  data42 === 'POLYX' ||
                  data42 === 'EURL.XTZ' ||
                  data42 === 'EUR' ||
                  data42 === 'USD' ||
                  data42 === 'GBP' ||
                  data42 === 'CHF'
                )
              ) {
                const err78 = {
                  instancePath:
                    instancePath + '/assetAccountSelector/assetSymbols/0',
                  schemaPath:
                    '#/properties/assetAccountSelector/properties/assetSymbols/items/0/enum',
                  keyword: 'enum',
                  params: {
                    allowedValues:
                      schema11.properties.assetAccountSelector.properties
                        .assetSymbols.items[0].enum,
                  },
                  message: 'must be equal to one of the allowed values',
                }
                if (vErrors === null) {
                  vErrors = [err78]
                } else {
                  vErrors.push(err78)
                }
                errors++
              }
            }
          } else {
            const err79 = {
              instancePath: instancePath + '/assetAccountSelector/assetSymbols',
              schemaPath:
                '#/properties/assetAccountSelector/properties/assetSymbols/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err79]
            } else {
              vErrors.push(err79)
            }
            errors++
          }
        }
      } else {
        const err80 = {
          instancePath: instancePath + '/assetAccountSelector',
          schemaPath: '#/properties/assetAccountSelector/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        if (vErrors === null) {
          vErrors = [err80]
        } else {
          vErrors.push(err80)
        }
        errors++
      }
    }
  } else {
    const err81 = {
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err81]
    } else {
      vErrors.push(err81)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
