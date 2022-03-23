'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreateAssetAccountInput',
  type: 'object',
  properties: {
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
    groupSize: { type: 'integer' },
    groupThreshold: { type: 'integer' },
    publicKey: { type: 'string' },
    externalId: { type: 'string' },
    tags: {
      type: 'array',
      items: [{ type: 'string' }],
      minItems: 0,
      additionalItems: true,
    },
    name: { type: 'string' },
  },
  required: ['assetSymbol'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreateAssetAccountInput" */ let vErrors = null
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
    for (const key0 in data) {
      if (
        !(
          key0 === 'assetSymbol' ||
          key0 === 'groupSize' ||
          key0 === 'groupThreshold' ||
          key0 === 'publicKey' ||
          key0 === 'externalId' ||
          key0 === 'tags' ||
          key0 === 'name'
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
    if (data.assetSymbol !== undefined) {
      let data0 = data.assetSymbol
      if (typeof data0 !== 'string') {
        const err2 = {
          instancePath: instancePath + '/assetSymbol',
          schemaPath: '#/properties/assetSymbol/type',
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
      if (
        !(
          data0 === 'ADA' ||
          data0 === 'ALGO' ||
          data0 === 'BCH' ||
          data0 === 'BTC' ||
          data0 === 'BSV' ||
          data0 === 'DOGE' ||
          data0 === 'DOT' ||
          data0 === 'ETH' ||
          data0 === 'EOS' ||
          data0 === 'LTC' ||
          data0 === '1INCH.ETH' ||
          data0 === 'DAI.ETH' ||
          data0 === 'USDT.ETH' ||
          data0 === 'USDC.ETH' ||
          data0 === 'JEUR.ETH' ||
          data0 === 'JCHF.ETH' ||
          data0 === 'JGBP.ETH' ||
          data0 === 'WBTC.ETH' ||
          data0 === 'AAVE.ETH' ||
          data0 === 'BAT.ETH' ||
          data0 === 'COMP.ETH' ||
          data0 === 'LINK.ETH' ||
          data0 === 'MKR.ETH' ||
          data0 === 'SUSHI.ETH' ||
          data0 === 'UNI.ETH' ||
          data0 === 'KSM' ||
          data0 === 'XLM' ||
          data0 === 'XRP' ||
          data0 === 'BNB.BSC' ||
          data0 === 'MATIC' ||
          data0 === 'XTZ' ||
          data0 === 'SOL' ||
          data0 === 'POLYX' ||
          data0 === 'EURL.XTZ' ||
          data0 === 'EUR' ||
          data0 === 'USD' ||
          data0 === 'GBP' ||
          data0 === 'CHF'
        )
      ) {
        const err3 = {
          instancePath: instancePath + '/assetSymbol',
          schemaPath: '#/properties/assetSymbol/enum',
          keyword: 'enum',
          params: { allowedValues: schema11.properties.assetSymbol.enum },
          message: 'must be equal to one of the allowed values',
        }
        if (vErrors === null) {
          vErrors = [err3]
        } else {
          vErrors.push(err3)
        }
        errors++
      }
    }
    if (data.groupSize !== undefined) {
      let data1 = data.groupSize
      if (!(typeof data1 == 'number' && !(data1 % 1) && !isNaN(data1))) {
        const err4 = {
          instancePath: instancePath + '/groupSize',
          schemaPath: '#/properties/groupSize/type',
          keyword: 'type',
          params: { type: 'integer' },
          message: 'must be integer',
        }
        if (vErrors === null) {
          vErrors = [err4]
        } else {
          vErrors.push(err4)
        }
        errors++
      }
    }
    if (data.groupThreshold !== undefined) {
      let data2 = data.groupThreshold
      if (!(typeof data2 == 'number' && !(data2 % 1) && !isNaN(data2))) {
        const err5 = {
          instancePath: instancePath + '/groupThreshold',
          schemaPath: '#/properties/groupThreshold/type',
          keyword: 'type',
          params: { type: 'integer' },
          message: 'must be integer',
        }
        if (vErrors === null) {
          vErrors = [err5]
        } else {
          vErrors.push(err5)
        }
        errors++
      }
    }
    if (data.publicKey !== undefined) {
      if (typeof data.publicKey !== 'string') {
        const err6 = {
          instancePath: instancePath + '/publicKey',
          schemaPath: '#/properties/publicKey/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
        }
        if (vErrors === null) {
          vErrors = [err6]
        } else {
          vErrors.push(err6)
        }
        errors++
      }
    }
    if (data.externalId !== undefined) {
      if (typeof data.externalId !== 'string') {
        const err7 = {
          instancePath: instancePath + '/externalId',
          schemaPath: '#/properties/externalId/type',
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
    if (data.tags !== undefined) {
      let data5 = data.tags
      if (Array.isArray(data5)) {
        if (data5.length < 0) {
          const err8 = {
            instancePath: instancePath + '/tags',
            schemaPath: '#/properties/tags/minItems',
            keyword: 'minItems',
            params: { limit: 0 },
            message: 'must NOT have fewer than 0 items',
          }
          if (vErrors === null) {
            vErrors = [err8]
          } else {
            vErrors.push(err8)
          }
          errors++
        }
        const len1 = data5.length
        if (len1 > 0) {
          if (typeof data5[0] !== 'string') {
            const err9 = {
              instancePath: instancePath + '/tags/0',
              schemaPath: '#/properties/tags/items/0/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err9]
            } else {
              vErrors.push(err9)
            }
            errors++
          }
        }
      } else {
        const err10 = {
          instancePath: instancePath + '/tags',
          schemaPath: '#/properties/tags/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        if (vErrors === null) {
          vErrors = [err10]
        } else {
          vErrors.push(err10)
        }
        errors++
      }
    }
    if (data.name !== undefined) {
      if (typeof data.name !== 'string') {
        const err11 = {
          instancePath: instancePath + '/name',
          schemaPath: '#/properties/name/type',
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
    }
  } else {
    const err12 = {
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err12]
    } else {
      vErrors.push(err12)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
