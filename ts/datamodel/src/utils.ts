import Aws from 'aws-sdk'

/**************************
 * Dynamo Document Client *
 **************************/

const createDocumentClient = () => {
  return new Aws.DynamoDB.DocumentClient()
}

let documentClient: Aws.DynamoDB.DocumentClient = createDocumentClient()

export const overrideDynamoDbDocumentClientWithTestClient = (
  testDocumentClient: any
): any => {
  documentClient = testDocumentClient
}

export const getDynamoDbDocumentClient = () => {
  return documentClient
}

/*****************
 * Env Variables *
 *****************/

export const getEnvParam = (paramName: string): string => {
  const maybeEnvParamValue = process.env[paramName]
  const isEnvParamValid =
    typeof maybeEnvParamValue === 'string' && maybeEnvParamValue.length > 0

  if (!isEnvParamValid) {
    throw new Error(`Invalid env param ${paramName}`)
  }

  return maybeEnvParamValue as string
}
