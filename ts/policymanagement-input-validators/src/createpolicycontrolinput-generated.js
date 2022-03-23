'use strict'
module.exports = validate10
module.exports.default = validate10
const schema11 = {
  $id: 'https://dfns.app/defs/schemas#CreatePolicyControlInput',
  type: 'object',
  properties: {
    description: { type: 'string' },
    name: { type: 'string' },
    configuration: {
      oneOf: [
        {
          title: 'CreateRequestApprovalPcConf',
          type: 'object',
          properties: {
            kind: { type: 'string', const: 'RequestApproval' },
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
          required: ['kind', 'canInitiatorApprove', 'numApprovals'],
        },
        {
          title: 'CreateNotifyAndAuditPcConf',
          type: 'object',
          properties: {
            kind: { type: 'string', const: 'NotifyAndAudit' },
            usernames: {
              type: 'array',
              items: [{ type: 'string' }],
              minItems: 0,
              additionalItems: true,
            },
            groups: {
              type: 'array',
              items: [{ type: 'string' }],
              minItems: 0,
              additionalItems: true,
            },
          },
          required: ['kind'],
        },
      ],
    },
  },
  required: ['configuration'],
  additionalProperties: false,
}
function validate10(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="https://dfns.app/defs/schemas#CreatePolicyControlInput" */ let vErrors = null
  let errors = 0
  if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.configuration === undefined) {
      const err0 = {
        instancePath,
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'configuration' },
        message: "must have required property '" + 'configuration' + "'",
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
        !(key0 === 'description' || key0 === 'name' || key0 === 'configuration')
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
    if (data.description !== undefined) {
      if (typeof data.description !== 'string') {
        const err2 = {
          instancePath: instancePath + '/description',
          schemaPath: '#/properties/description/type',
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
    if (data.name !== undefined) {
      if (typeof data.name !== 'string') {
        const err3 = {
          instancePath: instancePath + '/name',
          schemaPath: '#/properties/name/type',
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
    if (data.configuration !== undefined) {
      let data2 = data.configuration
      const _errs7 = errors
      let valid1 = false
      let passing0 = null
      const _errs8 = errors
      if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
        if (data2.kind === undefined) {
          const err4 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'kind' },
            message: "must have required property '" + 'kind' + "'",
          }
          if (vErrors === null) {
            vErrors = [err4]
          } else {
            vErrors.push(err4)
          }
          errors++
        }
        if (data2.canInitiatorApprove === undefined) {
          const err5 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'canInitiatorApprove' },
            message:
              "must have required property '" + 'canInitiatorApprove' + "'",
          }
          if (vErrors === null) {
            vErrors = [err5]
          } else {
            vErrors.push(err5)
          }
          errors++
        }
        if (data2.numApprovals === undefined) {
          const err6 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: 'numApprovals' },
            message: "must have required property '" + 'numApprovals' + "'",
          }
          if (vErrors === null) {
            vErrors = [err6]
          } else {
            vErrors.push(err6)
          }
          errors++
        }
        if (data2.kind !== undefined) {
          let data3 = data2.kind
          if (typeof data3 !== 'string') {
            const err7 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/kind/type',
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
          if ('RequestApproval' !== data3) {
            const err8 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/kind/const',
              keyword: 'const',
              params: { allowedValue: 'RequestApproval' },
              message: 'must be equal to constant',
            }
            if (vErrors === null) {
              vErrors = [err8]
            } else {
              vErrors.push(err8)
            }
            errors++
          }
        }
        if (data2.approverUsernames !== undefined) {
          let data4 = data2.approverUsernames
          if (Array.isArray(data4)) {
            if (data4.length < 0) {
              const err9 = {
                instancePath: instancePath + '/configuration/approverUsernames',
                schemaPath:
                  '#/properties/configuration/oneOf/0/properties/approverUsernames/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err9]
              } else {
                vErrors.push(err9)
              }
              errors++
            }
            const len1 = data4.length
            if (len1 > 0) {
              if (typeof data4[0] !== 'string') {
                const err10 = {
                  instancePath:
                    instancePath + '/configuration/approverUsernames/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/0/properties/approverUsernames/items/0/type',
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
          } else {
            const err11 = {
              instancePath: instancePath + '/configuration/approverUsernames',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/approverUsernames/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err11]
            } else {
              vErrors.push(err11)
            }
            errors++
          }
        }
        if (data2.approverGroups !== undefined) {
          let data6 = data2.approverGroups
          if (Array.isArray(data6)) {
            if (data6.length < 0) {
              const err12 = {
                instancePath: instancePath + '/configuration/approverGroups',
                schemaPath:
                  '#/properties/configuration/oneOf/0/properties/approverGroups/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err12]
              } else {
                vErrors.push(err12)
              }
              errors++
            }
            const len3 = data6.length
            if (len3 > 0) {
              if (typeof data6[0] !== 'string') {
                const err13 = {
                  instancePath:
                    instancePath + '/configuration/approverGroups/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/0/properties/approverGroups/items/0/type',
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
              instancePath: instancePath + '/configuration/approverGroups',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/approverGroups/type',
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
        if (data2.timeoutInMinutes !== undefined) {
          let data8 = data2.timeoutInMinutes
          if (!(typeof data8 == 'number' && !(data8 % 1) && !isNaN(data8))) {
            const err15 = {
              instancePath: instancePath + '/configuration/timeoutInMinutes',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/timeoutInMinutes/type',
              keyword: 'type',
              params: { type: 'integer' },
              message: 'must be integer',
            }
            if (vErrors === null) {
              vErrors = [err15]
            } else {
              vErrors.push(err15)
            }
            errors++
          }
        }
        if (data2.canInitiatorApprove !== undefined) {
          if (typeof data2.canInitiatorApprove !== 'boolean') {
            const err16 = {
              instancePath: instancePath + '/configuration/canInitiatorApprove',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/canInitiatorApprove/type',
              keyword: 'type',
              params: { type: 'boolean' },
              message: 'must be boolean',
            }
            if (vErrors === null) {
              vErrors = [err16]
            } else {
              vErrors.push(err16)
            }
            errors++
          }
        }
        if (data2.numApprovals !== undefined) {
          let data10 = data2.numApprovals
          if (!(typeof data10 == 'number' && !(data10 % 1) && !isNaN(data10))) {
            const err17 = {
              instancePath: instancePath + '/configuration/numApprovals',
              schemaPath:
                '#/properties/configuration/oneOf/0/properties/numApprovals/type',
              keyword: 'type',
              params: { type: 'integer' },
              message: 'must be integer',
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
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf/0/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        if (vErrors === null) {
          vErrors = [err18]
        } else {
          vErrors.push(err18)
        }
        errors++
      }
      var _valid0 = _errs8 === errors
      if (_valid0) {
        valid1 = true
        passing0 = 0
      }
      const _errs26 = errors
      if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
        if (data2.kind === undefined) {
          const err19 = {
            instancePath: instancePath + '/configuration',
            schemaPath: '#/properties/configuration/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: 'kind' },
            message: "must have required property '" + 'kind' + "'",
          }
          if (vErrors === null) {
            vErrors = [err19]
          } else {
            vErrors.push(err19)
          }
          errors++
        }
        if (data2.kind !== undefined) {
          let data11 = data2.kind
          if (typeof data11 !== 'string') {
            const err20 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/kind/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            }
            if (vErrors === null) {
              vErrors = [err20]
            } else {
              vErrors.push(err20)
            }
            errors++
          }
          if ('NotifyAndAudit' !== data11) {
            const err21 = {
              instancePath: instancePath + '/configuration/kind',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/kind/const',
              keyword: 'const',
              params: { allowedValue: 'NotifyAndAudit' },
              message: 'must be equal to constant',
            }
            if (vErrors === null) {
              vErrors = [err21]
            } else {
              vErrors.push(err21)
            }
            errors++
          }
        }
        if (data2.usernames !== undefined) {
          let data12 = data2.usernames
          if (Array.isArray(data12)) {
            if (data12.length < 0) {
              const err22 = {
                instancePath: instancePath + '/configuration/usernames',
                schemaPath:
                  '#/properties/configuration/oneOf/1/properties/usernames/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err22]
              } else {
                vErrors.push(err22)
              }
              errors++
            }
            const len5 = data12.length
            if (len5 > 0) {
              if (typeof data12[0] !== 'string') {
                const err23 = {
                  instancePath: instancePath + '/configuration/usernames/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/1/properties/usernames/items/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                }
                if (vErrors === null) {
                  vErrors = [err23]
                } else {
                  vErrors.push(err23)
                }
                errors++
              }
            }
          } else {
            const err24 = {
              instancePath: instancePath + '/configuration/usernames',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/usernames/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err24]
            } else {
              vErrors.push(err24)
            }
            errors++
          }
        }
        if (data2.groups !== undefined) {
          let data14 = data2.groups
          if (Array.isArray(data14)) {
            if (data14.length < 0) {
              const err25 = {
                instancePath: instancePath + '/configuration/groups',
                schemaPath:
                  '#/properties/configuration/oneOf/1/properties/groups/minItems',
                keyword: 'minItems',
                params: { limit: 0 },
                message: 'must NOT have fewer than 0 items',
              }
              if (vErrors === null) {
                vErrors = [err25]
              } else {
                vErrors.push(err25)
              }
              errors++
            }
            const len7 = data14.length
            if (len7 > 0) {
              if (typeof data14[0] !== 'string') {
                const err26 = {
                  instancePath: instancePath + '/configuration/groups/0',
                  schemaPath:
                    '#/properties/configuration/oneOf/1/properties/groups/items/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                }
                if (vErrors === null) {
                  vErrors = [err26]
                } else {
                  vErrors.push(err26)
                }
                errors++
              }
            }
          } else {
            const err27 = {
              instancePath: instancePath + '/configuration/groups',
              schemaPath:
                '#/properties/configuration/oneOf/1/properties/groups/type',
              keyword: 'type',
              params: { type: 'array' },
              message: 'must be array',
            }
            if (vErrors === null) {
              vErrors = [err27]
            } else {
              vErrors.push(err27)
            }
            errors++
          }
        }
      } else {
        const err28 = {
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf/1/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        }
        if (vErrors === null) {
          vErrors = [err28]
        } else {
          vErrors.push(err28)
        }
        errors++
      }
      var _valid0 = _errs26 === errors
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
        const err29 = {
          instancePath: instancePath + '/configuration',
          schemaPath: '#/properties/configuration/oneOf',
          keyword: 'oneOf',
          params: { passingSchemas: passing0 },
          message: 'must match exactly one schema in oneOf',
        }
        if (vErrors === null) {
          vErrors = [err29]
        } else {
          vErrors.push(err29)
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
    const err30 = {
      instancePath,
      schemaPath: '#/type',
      keyword: 'type',
      params: { type: 'object' },
      message: 'must be object',
    }
    if (vErrors === null) {
      vErrors = [err30]
    } else {
      vErrors.push(err30)
    }
    errors++
  }
  validate10.errors = vErrors
  return errors === 0
}
