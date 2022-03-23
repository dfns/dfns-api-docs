'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#UpdatePolicyControlInput',
  type: 'object',
  properties: {
    description: { type: 'string' },
    name: { type: 'string' },
    configuration: {
      oneOf: [
        {
          title: 'UpdateRequestApprovalPcConf',
          type: 'object',
          properties: {
            approverUsernames: {
              type: 'array',
              items: [{ type: 'string' }],
              minItems: 0,
              additionalItems: true,
            },
            approverGroups: {
              type: 'array',
              items: [{ type: 'string' }],
              minItems: 0,
              additionalItems: true,
            },
            timeoutInMinutes: { type: 'integer' },
            canInitiatorApprove: { type: 'boolean' },
            numApprovals: { type: 'integer' },
          },
          required: [],
        },
        {
          title: 'UpdateNotifyAndAuditPcConf',
          type: 'object',
          properties: {
            groups: {
              type: 'array',
              items: [{ type: 'string' }],
              minItems: 0,
              additionalItems: true,
            },
            usernames: {
              type: 'array',
              items: [{ type: 'string' }],
              minItems: 0,
              additionalItems: true,
            },
          },
          required: [],
        },
      ],
    },
  },
  required: [],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#UpdatePolicyControlInput" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    for (const key0 in data) {
      if (
        !(key0 === 'description' || key0 === 'name' || key0 === 'configuration')
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
    if (data.name !== undefined) {
      if (typeof data.name !== 'string') {
        const err2 = {
          instancePath: instancePath + '/name',
          schemaPath: '#/properties/name/type',
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
    if (data.configuration !== undefined) {
      let data2 = data.configuration
      const _errs7 = errors
      let valid1 = false
      let passing0 = null
      const _errs8 = errors
      if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
        if (data2.approverUsernames !== undefined) {
          let data3 = data2.approverUsernames
          if (Array.isArray(data3)) {
            if (data3.length < 0) {
              const err3 = {
                instancePath: instancePath + '/configuration/approverUsernames',
                schemaPath:
                  '#/properties/configuration/oneOf/0/properties/approverUsernames/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err3]
              } else {
                vErrors.push(err3)
              }
              errors++
            }
            const len1 = data3.length
            if (len1 > 0) {
              if (typeof data3[0] !== 'string') {
                const err4 = {
                  instancePath:
                    instancePath + '/configuration/approverUsernames/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/0/properties/approverUsernames/items/0/type',
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
          } else {
            const err5 = {
              instancePath: instancePath + '/configuration/approverUsernames',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/approverUsernames/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err5]
            } else {
              vErrors.push(err5)
            }
            errors++
          }
        }
        if (data2.approverGroups !== undefined) {
          let data5 = data2.approverGroups
          if (Array.isArray(data5)) {
            if (data5.length < 0) {
              const err6 = {
                instancePath: instancePath + '/configuration/approverGroups',
                schemaPath:
                  '#/properties/configuration/oneOf/0/properties/approverGroups/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err6]
              } else {
                vErrors.push(err6)
              }
              errors++
            }
            const len3 = data5.length
            if (len3 > 0) {
              if (typeof data5[0] !== 'string') {
                const err7 = {
                  instancePath:
                    instancePath + '/configuration/approverGroups/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/0/properties/approverGroups/items/0/type',
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
          } else {
            const err8 = {
              instancePath: instancePath + '/configuration/approverGroups',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/approverGroups/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err8]
            } else {
              vErrors.push(err8)
            }
            errors++
          }
        }
        if (data2.timeoutInMinutes !== undefined) {
          let data7 = data2.timeoutInMinutes
          if (!(typeof data7 == 'number' && !(data7 % 1) && !isNaN(data7))) {
            const err9 = {
              instancePath: instancePath + '/configuration/timeoutInMinutes',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/timeoutInMinutes/type',
              keyword: 'type',
              params: { type: 'integer' },
              message: 'must be integer',
            }
            if (vErrors === null) {
              vErrors = [err9]
            } else {
              vErrors.push(err9)
            }
            errors++
          }
        }
        if (data2.canInitiatorApprove !== undefined) {
          if (typeof data2.canInitiatorApprove !== 'boolean') {
            const err10 = {
              instancePath: instancePath + '/configuration/canInitiatorApprove',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/canInitiatorApprove/type',
              keyword: 'type',
              params: { type: 'boolean' },
              message: 'must be boolean',
            }
            if (vErrors === null) {
              vErrors = [err10]
            } else {
              vErrors.push(err10)
            }
            errors++
          }
        }
        if (data2.numApprovals !== undefined) {
          let data9 = data2.numApprovals
          if (!(typeof data9 == 'number' && !(data9 % 1) && !isNaN(data9))) {
            const err11 = {
              instancePath: instancePath + '/configuration/numApprovals',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/numApprovals/type',
              keyword: 'type',
              params: { type: 'integer' },
              message: 'must be integer',
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
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf/0/type',
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
      var _valid0 = _errs8 === errors
      if (_valid0) {
        valid1 = true
        passing0 = 0
      }
      const _errs24 = errors
      if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
        if (data2.groups !== undefined) {
          let data10 = data2.groups
          if (Array.isArray(data10)) {
            if (data10.length < 0) {
              const err13 = {
                instancePath: instancePath + '/configuration/groups',
                schemaPath:
                  '#/properties/configuration/oneOf/1/properties/groups/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err13]
              } else {
                vErrors.push(err13)
              }
              errors++
            }
            const len5 = data10.length
            if (len5 > 0) {
              if (typeof data10[0] !== 'string') {
                const err14 = {
                  instancePath: instancePath + '/configuration/groups/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/1/properties/groups/items/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                }
                if (vErrors === null) {
                  vErrors = [err14]
                } else {
                  vErrors.push(err14)
                }
                errors++
              }
            }
          } else {
            const err15 = {
              instancePath: instancePath + '/configuration/groups',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/groups/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err15]
            } else {
              vErrors.push(err15)
            }
            errors++
          }
        }
        if (data2.usernames !== undefined) {
          let data12 = data2.usernames
          if (Array.isArray(data12)) {
            if (data12.length < 0) {
              const err16 = {
                instancePath: instancePath + '/configuration/usernames',
                schemaPath:
                  '#/properties/configuration/oneOf/1/properties/usernames/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err16]
              } else {
                vErrors.push(err16)
              }
              errors++
            }
            const len7 = data12.length
            if (len7 > 0) {
              if (typeof data12[0] !== 'string') {
                const err17 = {
                  instancePath: instancePath + '/configuration/usernames/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/1/properties/usernames/items/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                }
                if (vErrors === null) {
                  vErrors = [err17]
                } else {
                  vErrors.push(err17)
                }
                errors++
              }
            }
          } else {
            const err18 = {
              instancePath: instancePath + '/configuration/usernames',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/usernames/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
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
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf/1/type',
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
      var _valid0 = _errs24 === errors
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
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf',
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
  } else {
    const err21 = {
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err21]
    } else {
      vErrors.push(err21)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
