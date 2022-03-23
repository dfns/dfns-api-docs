import { PublicKeyStatus } from '../PublicKeys'
import {
  Initiator,
  IsoDate,
  IsoDatetime,
  Amount,
  EntityId,
  PublicKey,
  Tag,
  AssetSymbol,
  Countries,
  DfnsError,
  BadRequestError,
  EntityNotFoundError,
  EntityExpiredError,
  DuplicateError,
  PaymentRequiredError,
  DfnsCertificate,
} from '../Foundations'
import {
  PaymentInitiation,
  BlockchainWalletAddress,
  DfnsAssetAccount,
  AssetAccount,
  Payment,
  AssetAccountAuthorization,
  AssetAccountBalance,
  UpdateAssetAccountPayload,
  CreateAssetAccountInput,
  CreatePaymentInput,
  PaymentInstrument,
  PaymentInstrumentKind,
  PaymentInitiationStatus,
  AssetAccountStatus,
  PaymentStatus,
  AssetAccountAuthorizationKind,
  AssetAccountPermissions,
} from './types'

import Aws from 'aws-sdk'
import { getDynamoDbDocumentClient, getEnvParam } from '../utils'
import { compositeValues, createByType, createByGenerator } from '../factories'

export const createPaymentItem = async (payment: Payment): Promise<Payment> => {
  const itemWithGenerated = {
    ...payment,
  }

  const itemWithComposite = {
    ...itemWithGenerated,
  }

  const paymentItem = itemWithComposite as Payment

  const item: Aws.DynamoDB.DocumentClient.PutItemInput = {
    TableName: getEnvParam('PAYMENT_TABLE_NAME'),
    Item: {
      info: paymentItem,
    },
  }

  const putOutput: Aws.DynamoDB.DocumentClient.PutItemOutput = await getDynamoDbDocumentClient()
    .query(item)
    .promise()

  return paymentItem
}

export const getPaymentItemById = async (id: EntityId): Promise<Payment> => {
  const getItemInput = {
    TableName: getEnvParam('PAYMENT_TABLE_NAME'),
    Key: { id },
  }
  const getItemOutput: Aws.DynamoDB.DocumentClient.GetItemOutput = await getDynamoDbDocumentClient()
    .get(getItemInput)
    .promise()
  const item = getItemOutput?.Item?.info

  if (item) {
    return item as Payment
  } else {
    throw new Error('')
  }
}

export const getPaymentItemByExternalId = async (
  externalId: EntityId
): Promise<Payment> => {
  const getItemInput = {
    TableName: getEnvParam('PAYMENT_TABLE_NAME'),
    Key: { externalId },
  }
  const getItemOutput: Aws.DynamoDB.DocumentClient.GetItemOutput = await getDynamoDbDocumentClient()
    .get(getItemInput)
    .promise()
  const item = getItemOutput?.Item?.info

  if (item) {
    return item as Payment
  } else {
    throw new Error('')
  }
}
export const queryPaymentItemsByStatus = async (
  status: PaymentStatus
): Promise<Payment[]> => {
  const queryInput: Aws.DynamoDB.DocumentClient.QueryInput = {
    TableName: getEnvParam('PAYMENT_TABLE_NAME'),
    IndexName: 'by-status-index',
    KeyConditionExpression: 'status = :cStatus',
    ExpressionAttributeValues: {
      ':cStatus': status,
    },
  }

  const queryOutput: Aws.DynamoDB.DocumentClient.QueryOutput = await getDynamoDbDocumentClient()
    .query(queryInput)
    .promise()

  if (Array.isArray(queryOutput.Items)) {
    return queryOutput.Items.map((item) => item.info) as Payment[]
  } else {
    throw new Error('')
  }
}
export const queryPaymentItemsByAssetSymbol = async (
  assetSymbol: AssetSymbol
): Promise<Payment[]> => {
  const queryInput: Aws.DynamoDB.DocumentClient.QueryInput = {
    TableName: getEnvParam('PAYMENT_TABLE_NAME'),
    IndexName: 'by-assetSymbol-index',
    KeyConditionExpression: 'assetSymbol = :cAssetSymbol',
    ExpressionAttributeValues: {
      ':cAssetSymbol': assetSymbol,
    },
  }

  const queryOutput: Aws.DynamoDB.DocumentClient.QueryOutput = await getDynamoDbDocumentClient()
    .query(queryInput)
    .promise()

  if (Array.isArray(queryOutput.Items)) {
    return queryOutput.Items.map((item) => item.info) as Payment[]
  } else {
    throw new Error('')
  }
}
