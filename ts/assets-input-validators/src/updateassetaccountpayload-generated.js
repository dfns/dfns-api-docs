'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#UpdateAssetAccountPayload',
  type: 'object',
  properties: {
    status: { type: 'string', enum: ['Creating', 'Enabled', 'Failed'] },
    address: { type: 'string' },
    publicKey: { type: 'string' },
    uniqueName: { type: 'string' },
  },
  required: ['status'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#UpdateAssetAccountPayload" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.status === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'status' },
        message: "must have required property '" + 'status' + "'",
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
          key0 === 'status' ||
          key0 === 'address' ||
          key0 === 'publicKey' ||
          key0 === 'uniqueName'
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
    if (data.status !== undefined) {
      let data0 = data.status
      if (typeof data0 !== 'string') {
        const err2 = {
          instancePath: instancePath + '/status',
          schemaPath: '#/properties/status/type',
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
        !(data0 === 'Creating' || data0 === 'Enabled' || data0 === 'Failed')
      ) {
        const err3 = {
          instancePath: instancePath + '/status',
          schemaPath: '#/properties/status/enum',
          keyword: 'enum',
          params: { allowedValues: schema11.properties.status.enum },
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
    if (data.address !== undefined) {
      if (typeof data.address !== 'string') {
        const err4 = {
          instancePath: instancePath + '/address',
          schemaPath: '#/properties/address/type',
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
    if (data.publicKey !== undefined) {
      if (typeof data.publicKey !== 'string') {
        const err5 = {
          instancePath: instancePath + '/publicKey',
          schemaPath: '#/properties/publicKey/type',
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
    if (data.uniqueName !== undefined) {
      if (typeof data.uniqueName !== 'string') {
        const err6 = {
          instancePath: instancePath + '/uniqueName',
          schemaPath: '#/properties/uniqueName/type',
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
  } else {
    const err7 = {
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err7]
    } else {
      vErrors.push(err7)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
