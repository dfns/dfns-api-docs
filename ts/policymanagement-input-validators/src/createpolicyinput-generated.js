'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreatePolicyInput',
  type: 'object',
  properties: {
    activityKind: {
      type: 'string',
      enum: [
        'PaymentInitiation',
        'EmployeeAdded',
        'EmployeeDetailsUpdated',
        'EmployeeRemoved',
      ],
    },
    isImmutable: { type: 'boolean' },
    description: { type: 'string' },
    name: { type: 'string' },
    controlIds: {
      type: 'array',
      items: [{ type: 'string' }],
      minItems: 1,
      additionalItems: true,
    },
    ruleIds: {
      type: 'array',
      items: [{ type: 'string' }],
      minItems: 1,
      additionalItems: true,
    },
    status: { type: 'string', enum: ['Enabled', 'Disabled', 'Archived'] },
  },
  required: [
    'activityKind',
    'isImmutable',
    'description',
    'controlIds',
    'ruleIds',
    'status',
  ],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreatePolicyInput" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.activityKind === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'activityKind' },
        message: "must have required property '" + 'activityKind' + "'",
      }
      if (vErrors === null) {
        vErrors = [err0]
      } else {
        vErrors.push(err0)
      }
      errors++
    }
    if (data.isImmutable === undefined) {
      const err1 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'isImmutable' },
        message: "must have required property '" + 'isImmutable' + "'",
      }
      if (vErrors === null) {
        vErrors = [err1]
      } else {
        vErrors.push(err1)
      }
      errors++
    }
    if (data.description === undefined) {
      const err2 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'description' },
        message: "must have required property '" + 'description' + "'",
      }
      if (vErrors === null) {
        vErrors = [err2]
      } else {
        vErrors.push(err2)
      }
      errors++
    }
    if (data.controlIds === undefined) {
      const err3 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'controlIds' },
        message: "must have required property '" + 'controlIds' + "'",
      }
      if (vErrors === null) {
        vErrors = [err3]
      } else {
        vErrors.push(err3)
      }
      errors++
    }
    if (data.ruleIds === undefined) {
      const err4 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'ruleIds' },
        message: "must have required property '" + 'ruleIds' + "'",
      }
      if (vErrors === null) {
        vErrors = [err4]
      } else {
        vErrors.push(err4)
      }
      errors++
    }
    if (data.status === undefined) {
      const err5 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'status' },
        message: "must have required property '" + 'status' + "'",
      }
      if (vErrors === null) {
        vErrors = [err5]
      } else {
        vErrors.push(err5)
      }
      errors++
    }
    for (const key0 in data) {
      if (
        !(
          key0 === 'activityKind' ||
          key0 === 'isImmutable' ||
          key0 === 'description' ||
          key0 === 'name' ||
          key0 === 'controlIds' ||
          key0 === 'ruleIds' ||
          key0 === 'status'
        )
      ) {
        const err6 = {
          instancePath,
          schemaPath: '#/additionalProperties',
          keyword: 'additionalProperties',
          params: { additionalProperty: key0 },
          message: 'must NOT have additional properties',
        }
        if (vErrors === null) {
          vErrors = [err6]
        } else {
          vErrors.push(err6)
        }
        errors++
      }
    }
    if (data.activityKind !== undefined) {
      let data0 = data.activityKind
      if (typeof data0 !== 'string') {
        const err7 = {
          instancePath: instancePath + '/activityKind',
          schemaPath: '#/properties/activityKind/type',
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
      if (
        !(
          data0 === 'PaymentInitiation' ||
          data0 === 'EmployeeAdded' ||
          data0 === 'EmployeeDetailsUpdated' ||
          data0 === 'EmployeeRemoved'
        )
      ) {
        const err8 = {
          instancePath: instancePath + '/activityKind',
          schemaPath: '#/properties/activityKind/enum',
          keyword: 'enum',
          params: { allowedValues: schema11.properties.activityKind.enum },
          message: 'must be equal to one of the allowed values',
        }
        if (vErrors === null) {
          vErrors = [err8]
        } else {
          vErrors.push(err8)
        }
        errors++
      }
    }
    if (data.isImmutable !== undefined) {
      if (typeof data.isImmutable !== 'boolean') {
        const err9 = {
          instancePath: instancePath + '/isImmutable',
          schemaPath: '#/properties/isImmutable/type',
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
    if (data.description !== undefined) {
      if (typeof data.description !== 'string') {
        const err10 = {
          instancePath: instancePath + '/description',
          schemaPath: '#/properties/description/type',
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
    if (data.controlIds !== undefined) {
      let data4 = data.controlIds
      if (Array.isArray(data4)) {
        if (data4.length < 1) {
          const err12 = {
            instancePath: instancePath + '/controlIds',
            schemaPath: '#/properties/controlIds/minItems',
            keyword: 'minItems',
            params: { limit: 1 },
            message: 'must NOT have fewer than 1 items',
          }
          if (vErrors === null) {
            vErrors = [err12]
          } else {
            vErrors.push(err12)
          }
          errors++
        }
        const len1 = data4.length
        if (len1 > 0) {
          if (typeof data4[0] !== 'string') {
            const err13 = {
              instancePath: instancePath + '/controlIds/0',
              schemaPath: '#/properties/controlIds/items/0/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err13]
            } else {
              vErrors.push(err13)
            }
            errors++
          }
        }
      } else {
        const err14 = {
          instancePath: instancePath + '/controlIds',
          schemaPath: '#/properties/controlIds/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        if (vErrors === null) {
          vErrors = [err14]
        } else {
          vErrors.push(err14)
        }
        errors++
      }
    }
    if (data.ruleIds !== undefined) {
      let data6 = data.ruleIds
      if (Array.isArray(data6)) {
        if (data6.length < 1) {
          const err15 = {
            instancePath: instancePath + '/ruleIds',
            schemaPath: '#/properties/ruleIds/minItems',
            keyword: 'minItems',
            params: { limit: 1 },
            message: 'must NOT have fewer than 1 items',
          }
          if (vErrors === null) {
            vErrors = [err15]
          } else {
            vErrors.push(err15)
          }
          errors++
        }
        const len3 = data6.length
        if (len3 > 0) {
          if (typeof data6[0] !== 'string') {
            const err16 = {
              instancePath: instancePath + '/ruleIds/0',
              schemaPath: '#/properties/ruleIds/items/0/type',
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
        }
      } else {
        const err17 = {
          instancePath: instancePath + '/ruleIds',
          schemaPath: '#/properties/ruleIds/type',
          keyword: 'type',
          params: { type: 'array' },
          message: 'must be array',
        }
        if (vErrors === null) {
          vErrors = [err17]
        } else {
          vErrors.push(err17)
        }
        errors++
      }
    }
    if (data.status !== undefined) {
      let data8 = data.status
      if (typeof data8 !== 'string') {
        const err18 = {
          instancePath: instancePath + '/status',
          schemaPath: '#/properties/status/type',
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
      if (
        !(data8 === 'Enabled' || data8 === 'Disabled' || data8 === 'Archived')
      ) {
        const err19 = {
          instancePath: instancePath + '/status',
          schemaPath: '#/properties/status/enum',
          keyword: 'enum',
          params: { allowedValues: schema11.properties.status.enum },
          message: 'must be equal to one of the allowed values',
        }
        if (vErrors === null) {
          vErrors = [err19]
        } else {
          vErrors.push(err19)
        }
        errors++
      }
    }
  } else {
    const err20 = {
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err20]
    } else {
      vErrors.push(err20)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
