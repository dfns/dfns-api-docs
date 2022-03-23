'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#UpdatePolicyInput',
  type: 'object',
  properties: {
    description: { type: 'string' },
    controlIds: {
      type: 'array',
      items: [{ type: 'string' }],
      minItems: 0,
      additionalItems: true,
    },
    ruleIds: {
      type: 'array',
      items: [{ type: 'string' }],
      minItems: 0,
      additionalItems: true,
    },
    status: { type: 'string', enum: ['Enabled', 'Disabled', 'Archived'] },
  },
  required: [],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#UpdatePolicyInput" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    for (const key0 in data) {
      if (
        !(
          key0 === 'description' ||
          key0 === 'controlIds' ||
          key0 === 'ruleIds' ||
          key0 === 'status'
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
    if (data.description !== undefined) {
      if (typeof data.description !== 'string') {
        const err1 = {
          instancePath: instancePath + '/description',
          schemaPath: '#/properties/description/type',
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
    if (data.controlIds !== undefined) {
      let data1 = data.controlIds
      if (Array.isArray(data1)) {
        if (data1.length < 0) {
          const err2 = {
            instancePath: instancePath + '/controlIds',
            schemaPath: '#/properties/controlIds/minItems',
            keyword: 'minItems',
            params: { limit: 0 },
            message: 'must NOT have fewer than 0 items',
          }
          if (vErrors === null) {
            vErrors = [err2]
          } else {
            vErrors.push(err2)
          }
          errors++
        }
        const len1 = data1.length
        if (len1 > 0) {
          if (typeof data1[0] !== 'string') {
            const err3 = {
              instancePath: instancePath + '/controlIds/0',
              schemaPath: '#/properties/controlIds/items/0/type',
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
      } else {
        const err4 = {
          instancePath: instancePath + '/controlIds',
          schemaPath: '#/properties/controlIds/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        if (vErrors === null) {
          vErrors = [err4]
        } else {
          vErrors.push(err4)
        }
        errors++
      }
    }
    if (data.ruleIds !== undefined) {
      let data3 = data.ruleIds
      if (Array.isArray(data3)) {
        if (data3.length < 0) {
          const err5 = {
            instancePath: instancePath + '/ruleIds',
            schemaPath: '#/properties/ruleIds/minItems',
            keyword: 'minItems',
            params: { limit: 0 },
            message: 'must NOT have fewer than 0 items',
          }
          if (vErrors === null) {
            vErrors = [err5]
          } else {
            vErrors.push(err5)
          }
          errors++
        }
        const len3 = data3.length
        if (len3 > 0) {
          if (typeof data3[0] !== 'string') {
            const err6 = {
              instancePath: instancePath + '/ruleIds/0',
              schemaPath: '#/properties/ruleIds/items/0/type',
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
          instancePath: instancePath + '/ruleIds',
          schemaPath: '#/properties/ruleIds/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        if (vErrors === null) {
          vErrors = [err7]
        } else {
          vErrors.push(err7)
        }
        errors++
      }
    }
    if (data.status !== undefined) {
      let data5 = data.status
      if (typeof data5 !== 'string') {
        const err8 = {
          instancePath: instancePath + '/status',
          schemaPath: '#/properties/status/type',
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
      if (
        !(data5 === 'Enabled' || data5 === 'Disabled' || data5 === 'Archived')
      ) {
        const err9 = {
          instancePath: instancePath + '/status',
          schemaPath: '#/properties/status/enum',
          keyword: 'enum',
          params: { allowedValues: schema11.properties.status.enum },
          message: 'must be equal to one of the allowed values',
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
