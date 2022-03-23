import {
  IsoDatetime,
  EntityId,
  DocumentSnapshot,
  BadRequestError,
  EntityNotFoundError,
} from '../Foundations'
import {
  CallbackEvent,
  CallbackSubscription,
  CallbackEventKind,
  CallbackEventStatus,
  CallbackStatus,
} from './types'

import Aws from 'aws-sdk'
import { getDynamoDbDocumentClient, getEnvParam } from '../utils'
import { compositeValues, createByType, createByGenerator } from '../factories'
