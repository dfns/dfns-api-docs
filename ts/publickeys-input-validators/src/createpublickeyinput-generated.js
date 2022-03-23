'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreatePublicKeyInput',
  type: 'object',
  properties: {
    externalId: { type: 'string' },
    assetAccountId: { type: 'string' },
    groupThreshold: { type: 'integer' },
    groupSize: { type: 'integer' },
    isEddsa: { type: 'boolean' },
    tags: {
      type: 'array',
      items: [{ type: 'string' }],
      minItems: 0,
      additionalItems: true,
    },
  },
  required: ['assetAccountId', 'groupThreshold', 'groupSize', 'isEddsa'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreatePublicKeyInput" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.assetAccountId === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'assetAccountId' },
        message: "must have required property '" + 'assetAccountId' + "'",
      }
      if (vErrors === null) {
        vErrors = [err0]
      } else {
        vErrors.push(err0)
      }
      errors++
    }
    if (data.groupThreshold === undefined) {
      const err1 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'groupThreshold' },
        message: "must have required property '" + 'groupThreshold' + "'",
      }
      if (vErrors === null) {
        vErrors = [err1]
      } else {
        vErrors.push(err1)
      }
      errors++
    }
    if (data.groupSize === undefined) {
      const err2 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'groupSize' },
        message: "must have required property '" + 'groupSize' + "'",
      }
      if (vErrors === null) {
        vErrors = [err2]
      } else {
        vErrors.push(err2)
      }
      errors++
    }
    if (data.isEddsa === undefined) {
      const err3 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'isEddsa' },
        message: "must have required property '" + 'isEddsa' + "'",
      }
      if (vErrors === null) {
        vErrors = [err3]
      } else {
        vErrors.push(err3)
      }
      errors++
    }
    for (const key0 in data) {
      if (
        !(
          key0 === 'externalId' ||
          key0 === 'assetAccountId' ||
          key0 === 'groupThreshold' ||
          key0 === 'groupSize' ||
          key0 === 'isEddsa' ||
          key0 === 'tags'
        )
      ) {
        const err4 = {
          instancePath,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: key0 },
          message: 'must NOT have additional properties',
        }
        if (vErrors === null) {
          vErrors = [err4]
        } else {
          vErrors.push(err4)
        }
        errors++
      }
    }
    if (data.externalId !== undefined) {
      if (typeof data.externalId !== 'string') {
        const err5 = {
          instancePath: instancePath + '/externalId',
          schemaPath: '#/properties/externalId/type',
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
    }
    if (data.assetAccountId !== undefined) {
      if (typeof data.assetAccountId !== 'string') {
        const err6 = {
          instancePath: instancePath + '/assetAccountId',
          schemaPath: '#/properties/assetAccountId/type',
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
    if (data.groupThreshold !== undefined) {
      let data2 = data.groupThreshold
      if (!(typeof data2 == 'number' && !(data2 % 1) && !isNaN(data2))) {
        const err7 = {
          instancePath: instancePath + '/groupThreshold',
          schemaPath: '#/properties/groupThreshold/type',
          keyword: 'type',
          params: { type: 'integer' },
          message: 'must be integer',
        }
        if (vErrors === null) {
          vErrors = [err7]
        } else {
          vErrors.push(err7)
        }
        errors++
      }
    }
    if (data.groupSize !== undefined) {
      let data3 = data.groupSize
      if (!(typeof data3 == 'number' && !(data3 % 1) && !isNaN(data3))) {
        const err8 = {
          instancePath: instancePath + '/groupSize',
          schemaPath: '#/properties/groupSize/type',
          keyword: 'type',
          params: { type: 'integer' },
          message: 'must be integer',
        }
        if (vErrors === null) {
          vErrors = [err8]
        } else {
          vErrors.push(err8)
        }
        errors++
      }
    }
    if (data.isEddsa !== undefined) {
      if (typeof data.isEddsa !== 'boolean') {
        const err9 = {
          instancePath: instancePath + '/isEddsa',
          schemaPath: '#/properties/isEddsa/type',
          keyword: 'type',
          params: { type: 'boolean' },
          message: 'must be boolean',
        }
        if (vErrors === null) {
          vErrors = [err9]
        } else {
          vErrors.push(err9)
        }
        errors++
      }
    }
    if (data.tags !== undefined) {
      let data5 = data.tags
      if (Array.isArray(data5)) {
        if (data5.length < 0) {
          const err10 = {
            instancePath: instancePath + '/tags',
            schemaPath: '#/properties/tags/minItems',
            keyword: 'minItems',
            params: { limit: 0 },
            message: 'must NOT have fewer than 0 items',
          }
          if (vErrors === null) {
            vErrors = [err10]
          } else {
            vErrors.push(err10)
          }
          errors++
        }
        const len1 = data5.length
        if (len1 > 0) {
          if (typeof data5[0] !== 'string') {
            const err11 = {
              instancePath: instancePath + '/tags/0',
              schemaPath: '#/properties/tags/items/0/type',
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
          instancePath: instancePath + '/tags',
          schemaPath: '#/properties/tags/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
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
      instancePath,
      schemaPath: '#/type',
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
  validate10.errors = vErrors
  return errors === 0
}
