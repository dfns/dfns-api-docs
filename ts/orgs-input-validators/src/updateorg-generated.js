'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#UpdateOrg',
  type: 'object',
  properties: {
    legalName: { type: 'string' },
    tradingName: { type: 'string' },
    dateOfIncorporation: { type: 'string' },
    companyNumber: { type: 'string' },
    taxId: { type: 'string' },
  },
  required: [],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#UpdateOrg" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    for (const key0 in data) {
      if (
        !(
          key0 === 'legalName' ||
          key0 === 'tradingName' ||
          key0 === 'dateOfIncorporation' ||
          key0 === 'companyNumber' ||
          key0 === 'taxId'
        )
      ) {
        const err0 = {
          instancePath,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: key0 },
          message: 'must NOT have additional properties',
        }
        if (vErrors === null) {
          vErrors = [err0]
        } else {
          vErrors.push(err0)
        }
        errors++
      }
    }
    if (data.legalName !== undefined) {
      if (typeof data.legalName !== 'string') {
        const err1 = {
          instancePath: instancePath + '/legalName',
          schemaPath: '#/properties/legalName/type',
          keyword: 'type',
          params: { type: 'string' },
          message: 'must be string',
        }
        if (vErrors === null) {
          vErrors = [err1]
        } else {
          vErrors.push(err1)
        }
        errors++
      }
    }
    if (data.tradingName !== undefined) {
      if (typeof data.tradingName !== 'string') {
        const err2 = {
          instancePath: instancePath + '/tradingName',
          schemaPath: '#/properties/tradingName/type',
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
    if (data.dateOfIncorporation !== undefined) {
      if (typeof data.dateOfIncorporation !== 'string') {
        const err3 = {
          instancePath: instancePath + '/dateOfIncorporation',
          schemaPath: '#/properties/dateOfIncorporation/type',
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
    if (data.companyNumber !== undefined) {
      if (typeof data.companyNumber !== 'string') {
        const err4 = {
          instancePath: instancePath + '/companyNumber',
          schemaPath: '#/properties/companyNumber/type',
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
    if (data.taxId !== undefined) {
      if (typeof data.taxId !== 'string') {
        const err5 = {
          instancePath: instancePath + '/taxId',
          schemaPath: '#/properties/taxId/type',
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
  } else {
    const err6 = {
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err6]
    } else {
      vErrors.push(err6)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
