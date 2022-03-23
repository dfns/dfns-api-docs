'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreateEmployee',
  type: 'object',
  properties: {
    username: { type: 'string' },
    email: { type: 'string' },
    issuer: { type: 'string' },
    fullName: { type: 'string' },
    dateOfBirth: { type: 'string' },
  },
  required: ['username', 'email', 'fullName', 'dateOfBirth'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreateEmployee" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.username === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'username' },
        message: "must have required property '" + 'username' + "'",
      }
      if (vErrors === null) {
        vErrors = [err0]
      } else {
        vErrors.push(err0)
      }
      errors++
    }
    if (data.email === undefined) {
      const err1 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'email' },
        message: "must have required property '" + 'email' + "'",
      }
      if (vErrors === null) {
        vErrors = [err1]
      } else {
        vErrors.push(err1)
      }
      errors++
    }
    if (data.fullName === undefined) {
      const err2 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'fullName' },
        message: "must have required property '" + 'fullName' + "'",
      }
      if (vErrors === null) {
        vErrors = [err2]
      } else {
        vErrors.push(err2)
      }
      errors++
    }
    if (data.dateOfBirth === undefined) {
      const err3 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'dateOfBirth' },
        message: "must have required property '" + 'dateOfBirth' + "'",
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
          key0 === 'username' ||
          key0 === 'email' ||
          key0 === 'issuer' ||
          key0 === 'fullName' ||
          key0 === 'dateOfBirth'
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
    if (data.username !== undefined) {
      if (typeof data.username !== 'string') {
        const err5 = {
          instancePath: instancePath + '/username',
          schemaPath: '#/properties/username/type',
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
    if (data.email !== undefined) {
      if (typeof data.email !== 'string') {
        const err6 = {
          instancePath: instancePath + '/email',
          schemaPath: '#/properties/email/type',
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
    if (data.issuer !== undefined) {
      if (typeof data.issuer !== 'string') {
        const err7 = {
          instancePath: instancePath + '/issuer',
          schemaPath: '#/properties/issuer/type',
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
    if (data.fullName !== undefined) {
      if (typeof data.fullName !== 'string') {
        const err8 = {
          instancePath: instancePath + '/fullName',
          schemaPath: '#/properties/fullName/type',
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
    }
    if (data.dateOfBirth !== undefined) {
      if (typeof data.dateOfBirth !== 'string') {
        const err9 = {
          instancePath: instancePath + '/dateOfBirth',
          schemaPath: '#/properties/dateOfBirth/type',
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
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err10]
    } else {
      vErrors.push(err10)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
