'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreatePaymentInput',
  type: 'object',
  properties: {
    externalId: { type: 'string' },
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
    amount: { type: 'string' },
    receiver: {
      oneOf: [
        {
          title: 'BlockchainWalletAddress',
          type: 'object',
          properties: {
            kind: { type: 'string', const: 'BlockchainWalletAddress' },
            address: { type: 'string' },
          },
          required: ['kind', 'address'],
        },
        {
          title: 'DfnsAssetAccount',
          type: 'object',
          properties: {
            kind: { type: 'string', const: 'DfnsAssetAccount' },
            id: { type: 'string' },
          },
          required: ['kind', 'id'],
        },
      ],
    },
    note: { type: 'string' },
    narrative: { type: 'string' },
  },
  required: ['assetSymbol', 'amount', 'receiver'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreatePaymentInput" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.assetSymbol === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'assetSymbol' },
        message: "must have required property '" + 'assetSymbol' + "'",
      }
      if (vErrors === null) {
        vErrors = [err0]
      } else {
        vErrors.push(err0)
      }
      errors++
    }
    if (data.amount === undefined) {
      const err1 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'amount' },
        message: "must have required property '" + 'amount' + "'",
      }
      if (vErrors === null) {
        vErrors = [err1]
      } else {
        vErrors.push(err1)
      }
      errors++
    }
    if (data.receiver === undefined) {
      const err2 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'receiver' },
        message: "must have required property '" + 'receiver' + "'",
      }
      if (vErrors === null) {
        vErrors = [err2]
      } else {
        vErrors.push(err2)
      }
      errors++
    }
    for (const key0 in data) {
      if (
        !(
          key0 === 'externalId' ||
          key0 === 'assetSymbol' ||
          key0 === 'amount' ||
          key0 === 'receiver' ||
          key0 === 'note' ||
          key0 === 'narrative'
        )
      ) {
        const err3 = {
          instancePath,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: key0 },
          message: 'must NOT have additional properties',
        }
        if (vErrors === null) {
          vErrors = [err3]
        } else {
          vErrors.push(err3)
        }
        errors++
      }
    }
    if (data.externalId !== undefined) {
      if (typeof data.externalId !== 'string') {
        const err4 = {
          instancePath: instancePath + '/externalId',
          schemaPath: '#/properties/externalId/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
        }
        if (vErrors === null) {
          vErrors = [err4]
        } else {
          vErrors.push(err4)
        }
        errors++
      }
    }
    if (data.assetSymbol !== undefined) {
      let data1 = data.assetSymbol
      if (typeof data1 !== 'string') {
        const err5 = {
          instancePath: instancePath + '/assetSymbol',
          schemaPath: '#/properties/assetSymbol/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
        }
        if (vErrors === null) {
          vErrors = [err5]
        } else {
          vErrors.push(err5)
        }
        errors++
      }
      if (
        !(
          data1 === 'ADA' ||
          data1 === 'ALGO' ||
          data1 === 'BCH' ||
          data1 === 'BTC' ||
          data1 === 'BSV' ||
          data1 === 'DOGE' ||
          data1 === 'DOT' ||
          data1 === 'ETH' ||
          data1 === 'EOS' ||
          data1 === 'LTC' ||
          data1 === '1INCH.ETH' ||
          data1 === 'DAI.ETH' ||
          data1 === 'USDT.ETH' ||
          data1 === 'USDC.ETH' ||
          data1 === 'JEUR.ETH' ||
          data1 === 'JCHF.ETH' ||
          data1 === 'JGBP.ETH' ||
          data1 === 'WBTC.ETH' ||
          data1 === 'AAVE.ETH' ||
          data1 === 'BAT.ETH' ||
          data1 === 'COMP.ETH' ||
          data1 === 'LINK.ETH' ||
          data1 === 'MKR.ETH' ||
          data1 === 'SUSHI.ETH' ||
          data1 === 'UNI.ETH' ||
          data1 === 'KSM' ||
          data1 === 'XLM' ||
          data1 === 'XRP' ||
          data1 === 'BNB.BSC' ||
          data1 === 'MATIC' ||
          data1 === 'XTZ' ||
          data1 === 'SOL' ||
          data1 === 'POLYX' ||
          data1 === 'EURL.XTZ' ||
          data1 === 'EUR' ||
          data1 === 'USD' ||
          data1 === 'GBP' ||
          data1 === 'CHF'
        )
      ) {
        const err6 = {
          instancePath: instancePath + '/assetSymbol',
          schemaPath: '#/properties/assetSymbol/enum',
          keyword: 'enum',
          params: { allowedValues: schema11.properties.assetSymbol.enum },
          message: 'must be equal to one of the allowed values',
        }
        if (vErrors === null) {
          vErrors = [err6]
        } else {
          vErrors.push(err6)
        }
        errors++
      }
    }
    if (data.amount !== undefined) {
      if (typeof data.amount !== 'string') {
        const err7 = {
          instancePath: instancePath + '/amount',
          schemaPath: '#/properties/amount/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
        }
        if (vErrors === null) {
          vErrors = [err7]
        } else {
          vErrors.push(err7)
        }
        errors++
      }
    }
    if (data.receiver !== undefined) {
      let data3 = data.receiver
      const _errs9 = errors
      let valid1 = false
      let passing0 = null
      const _errs10 = errors
      if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
        if (data3.kind === undefined) {
          const err8 = {
            instancePath: instancePath + '/receiver',
            schemaPath: '#/properties/receiver/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'kind' },
            message: "must have required property '" + 'kind' + "'",
          }
          if (vErrors === null) {
            vErrors = [err8]
          } else {
            vErrors.push(err8)
          }
          errors++
        }
        if (data3.address === undefined) {
          const err9 = {
            instancePath: instancePath + '/receiver',
            schemaPath: '#/properties/receiver/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'address' },
            message: "must have required property '" + 'address' + "'",
          }
          if (vErrors === null) {
            vErrors = [err9]
          } else {
            vErrors.push(err9)
          }
          errors++
        }
        if (data3.kind !== undefined) {
          let data4 = data3.kind
          if (typeof data4 !== 'string') {
            const err10 = {
              instancePath: instancePath + '/receiver/kind',
              schemaPath: '#/properties/receiver/oneOf/0/properties/kind/type',
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
          if ('BlockchainWalletAddress' !== data4) {
            const err11 = {
              instancePath: instancePath + '/receiver/kind',
              schemaPath: '#/properties/receiver/oneOf/0/properties/kind/const',
              keyword: 'const',
              params: { allowedValue: 'BlockchainWalletAddress' },
              message: 'must be equal to constant',
            }
            if (vErrors === null) {
              vErrors = [err11]
            } else {
              vErrors.push(err11)
            }
            errors++
          }
        }
        if (data3.address !== undefined) {
          if (typeof data3.address !== 'string') {
            const err12 = {
              instancePath: instancePath + '/receiver/address',
              schemaPath:
                '#/properties/receiver/oneOf/0/properties/address/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err12]
            } else {
              vErrors.push(err12)
            }
            errors++
          }
        }
      } else {
        const err13 = {
          instancePath: instancePath + '/receiver',
          schemaPath: '#/properties/receiver/oneOf/0/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        if (vErrors === null) {
          vErrors = [err13]
        } else {
          vErrors.push(err13)
        }
        errors++
      }
      var _valid0 = _errs10 === errors
      if (_valid0) {
        valid1 = true
        passing0 = 0
      }
      const _errs16 = errors
      if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
        if (data3.kind === undefined) {
          const err14 = {
            instancePath: instancePath + '/receiver',
            schemaPath: '#/properties/receiver/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'kind' },
            message: "must have required property '" + 'kind' + "'",
          }
          if (vErrors === null) {
            vErrors = [err14]
          } else {
            vErrors.push(err14)
          }
          errors++
        }
        if (data3.id === undefined) {
          const err15 = {
            instancePath: instancePath + '/receiver',
            schemaPath: '#/properties/receiver/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'id' },
            message: "must have required property '" + 'id' + "'",
          }
          if (vErrors === null) {
            vErrors = [err15]
          } else {
            vErrors.push(err15)
          }
          errors++
        }
        if (data3.kind !== undefined) {
          let data6 = data3.kind
          if (typeof data6 !== 'string') {
            const err16 = {
              instancePath: instancePath + '/receiver/kind',
              schemaPath: '#/properties/receiver/oneOf/1/properties/kind/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err16]
            } else {
              vErrors.push(err16)
            }
            errors++
          }
          if ('DfnsAssetAccount' !== data6) {
            const err17 = {
              instancePath: instancePath + '/receiver/kind',
              schemaPath: '#/properties/receiver/oneOf/1/properties/kind/const',
              keyword: 'const',
              params: { allowedValue: 'DfnsAssetAccount' },
              message: 'must be equal to constant',
            }
            if (vErrors === null) {
              vErrors = [err17]
            } else {
              vErrors.push(err17)
            }
            errors++
          }
        }
        if (data3.id !== undefined) {
          if (typeof data3.id !== 'string') {
            const err18 = {
              instancePath: instancePath + '/receiver/id',
              schemaPath: '#/properties/receiver/oneOf/1/properties/id/type',
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
          instancePath: instancePath + '/receiver',
          schemaPath: '#/properties/receiver/oneOf/1/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        if (vErrors === null) {
          vErrors = [err19]
        } else {
          vErrors.push(err19)
        }
        errors++
      }
      var _valid0 = _errs16 === errors
      if (_valid0 && valid1) {
        valid1 = false
        passing0 = [passing0, 1]
      } else {
        if (_valid0) {
          valid1 = true
          passing0 = 1
        }
      }
      if (!valid1) {
        const err20 = {
          instancePath: instancePath + '/receiver',
          schemaPath: '#/properties/receiver/oneOf',
          keyword: 'oneOf',
          params: { passingSchemas: passing0 },
          message: 'must match exactly one schema in oneOf',
        }
        if (vErrors === null) {
          vErrors = [err20]
        } else {
          vErrors.push(err20)
        }
        errors++
      } else {
        errors = _errs9
        if (vErrors !== null) {
          if (_errs9) {
            vErrors.length = _errs9
          } else {
            vErrors = null
          }
        }
      }
    }
    if (data.note !== undefined) {
      if (typeof data.note !== 'string') {
        const err21 = {
          instancePath: instancePath + '/note',
          schemaPath: '#/properties/note/type',
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
    }
    if (data.narrative !== undefined) {
      if (typeof data.narrative !== 'string') {
        const err22 = {
          instancePath: instancePath + '/narrative',
          schemaPath: '#/properties/narrative/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
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
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err23]
    } else {
      vErrors.push(err23)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
