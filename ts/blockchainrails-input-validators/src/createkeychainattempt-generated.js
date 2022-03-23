'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreateKeychainAttempt',
  type: 'object',
  properties: {
    parties: { type: 'number' },
    threshold: { type: 'number' },
    accountId: { type: 'string' },
  },
  required: ['parties', 'threshold', 'accountId'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreateKeychainAttempt" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.parties === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'parties' },
        message: "must have required property '" + 'parties' + "'",
      }
      if (vErrors === null) {
        vErrors = [err0]
      } else {
        vErrors.push(err0)
      }
      errors++
    }
    if (data.threshold === undefined) {
      const err1 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'threshold' },
        message: "must have required property '" + 'threshold' + "'",
      }
      if (vErrors === null) {
        vErrors = [err1]
      } else {
        vErrors.push(err1)
      }
      errors++
    }
    if (data.accountId === undefined) {
      const err2 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'accountId' },
        message: "must have required property '" + 'accountId' + "'",
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
        !(key0 === 'parties' || key0 === 'threshold' || key0 === 'accountId')
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
    if (data.parties !== undefined) {
      if (!(typeof data.parties == 'number')) {
        const err4 = {
          instancePath: instancePath + '/parties',
          schemaPath: '#/properties/parties/type',
          keyword: 'type',
          params: { type: 'number' },
          message: 'must be number',
        }
        if (vErrors === null) {
          vErrors = [err4]
        } else {
          vErrors.push(err4)
        }
        errors++
      }
    }
    if (data.threshold !== undefined) {
      if (!(typeof data.threshold == 'number')) {
        const err5 = {
          instancePath: instancePath + '/threshold',
          schemaPath: '#/properties/threshold/type',
          keyword: 'type',
          params: { type: 'number' },
          message: 'must be number',
        }
        if (vErrors === null) {
          vErrors = [err5]
        } else {
          vErrors.push(err5)
        }
        errors++
      }
    }
    if (data.accountId !== undefined) {
      if (typeof data.accountId !== 'string') {
        const err6 = {
          instancePath: instancePath + '/accountId',
          schemaPath: '#/properties/accountId/type',
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
