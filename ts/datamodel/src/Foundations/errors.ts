export class DfnsError extends Error {
  name: string = 'DfnsError'

  httpStatus: number = 500
  shouldTriggerInvestigation: boolean = false
  serviceName: string = 'SERVICE_NOT_DEFINED'
  causes?: string[] = []
  isDfnsError: boolean = true

  constructor(
    message: string,
    serviceName: string,
    causes: string[] = [],
    shouldTriggerInvestigation: boolean = true
  ) {
    super(message)

    this.serviceName = serviceName || (process.env.SERVICE_NAME as string)
    this.shouldTriggerInvestigation = shouldTriggerInvestigation
    this.causes = causes

    if (typeof serviceName !== 'string') {
      this.serviceName = 'SERVICE_NOT_DEFINED'
      this.shouldTriggerInvestigation = true
    }
  }

  toErrorObject() {
    const stackTrace = this.stack || ''
    return {
      name: this.name,
      serviceName: this.serviceName,
      message: this.message,
      causes: this.causes,
      shouldTriggerInvestigation: this.shouldTriggerInvestigation,
      httpStatus: this.httpStatus,
      stackTrace,
    }
  }

  toString() {
    return JSON.stringify(this.toErrorObject())
  }
}

export class EntityExpiredError extends DfnsError {
  name: string = 'EntityExpiredError'
  // FIXME: Missing documentation for serviceName
  serviceName: string

  // FIXME: Missing documentation for message
  message: string

  // FIXME: Missing documentation for causes
  causes?: string[]

  // FIXME: Missing documentation for shouldTriggerInvestigaton
  shouldTriggerInvestigaton: boolean

  // FIXME: Missing documentation for isDfnsError
  isDfnsError: boolean = true

  // FIXME: Missing documentation for httpStatus
  httpStatus: number = 410

  // FIXME: Missing documentation for errorName
  errorName: string = 'Resource Expired'
}

export class DuplicateError extends DfnsError {
  name: string = 'DuplicateError'
  // FIXME: Missing documentation for serviceName
  serviceName: string

  // FIXME: Missing documentation for message
  message: string

  // FIXME: Missing documentation for causes
  causes?: string[]

  // FIXME: Missing documentation for shouldTriggerInvestigaton
  shouldTriggerInvestigaton: boolean

  // FIXME: Missing documentation for isDfnsError
  isDfnsError: boolean = true

  // FIXME: Missing documentation for httpStatus
  httpStatus: number = 409

  // FIXME: Missing documentation for errorName
  errorName: string = 'Duplicate'
}

export class EntityNotFoundError extends DfnsError {
  name: string = 'EntityNotFoundError'
  // FIXME: Missing documentation for serviceName
  serviceName: string

  // FIXME: Missing documentation for message
  message: string

  // FIXME: Missing documentation for causes
  causes?: string[]

  // FIXME: Missing documentation for shouldTriggerInvestigaton
  shouldTriggerInvestigaton: boolean

  // FIXME: Missing documentation for isDfnsError
  isDfnsError: boolean = true

  // FIXME: Missing documentation for httpStatus
  httpStatus: number = 404

  // FIXME: Missing documentation for errorName
  errorName: string = 'Not Found'
}

export class PaymentRequiredError extends DfnsError {
  name: string = 'PaymentRequiredError'
  // FIXME: Missing documentation for serviceName
  serviceName: string

  // FIXME: Missing documentation for message
  message: string

  // FIXME: Missing documentation for causes
  causes?: string[]

  // FIXME: Missing documentation for shouldTriggerInvestigaton
  shouldTriggerInvestigaton: boolean

  // FIXME: Missing documentation for isDfnsError
  isDfnsError: boolean = true

  // FIXME: Missing documentation for httpStatus
  httpStatus: number = 402

  // FIXME: Missing documentation for errorName
  errorName: string = 'Payment Required'
}

export class BadRequestError extends DfnsError {
  name: string = 'BadRequestError'
  // FIXME: Missing documentation for serviceName
  serviceName: string

  // FIXME: Missing documentation for message
  message: string

  // FIXME: Missing documentation for causes
  causes?: string[]

  // FIXME: Missing documentation for shouldTriggerInvestigaton
  shouldTriggerInvestigaton: boolean

  // FIXME: Missing documentation for isDfnsError
  isDfnsError: boolean = true

  // FIXME: Missing documentation for httpStatus
  httpStatus: number = 400

  // FIXME: Missing documentation for errorName
  errorName: string = 'Bad Request'
}
