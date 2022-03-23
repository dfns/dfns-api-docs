export const CreateCallbackSubscriptionApiMapping = {
  requiredScopes: [],
  http: ['POST', 'callback-subscriptions'],
  graphQl: ['Callbacks', 'Mutation', 'CreateCallbackSubscription'],
  queue: 'CallbacksCreateCallbackSubscription',
}

export const ReadCallbackSubscriptionByIdApiMapping = {
  requiredScopes: [],
  http: ['GET', 'callback-subscriptions/:callbackSubscriptionId'],
  graphQl: ['Callbacks', 'Query', 'ReadCallbackSubscriptionById'],
  queue: 'CallbacksReadCallbackSubscriptionById',
}

export const ListCallbackSubscriptionsApiMapping = {
  requiredScopes: [],
  http: ['GET', 'callback-subscriptions'],
  graphQl: ['Callbacks', 'Query', 'ListCallbackSubscriptions'],
  queue: 'CallbacksListCallbackSubscriptions',
}

export const ArchiveCallbackSubscriptionApiMapping = {
  requiredScopes: [],
  http: ['DELETE', 'callback-subscriptions/:callbackSubscriptionId'],
  graphQl: ['Callbacks', 'Mutation', 'ArchiveCallbackSubscription'],
  queue: 'CallbacksArchiveCallbackSubscription',
}

export const ReadCallbackEventByIdApiMapping = {
  requiredScopes: [],
  http: ['GET', 'callback-events/:callbackEventId'],
  graphQl: ['Callbacks', 'Query', 'ReadCallbackEventById'],
  queue: 'CallbacksReadCallbackEventById',
}

export const ListCallbackEventsApiMapping = {
  requiredScopes: [],
  http: ['GET', 'callback-events'],
  graphQl: ['Callbacks', 'Query', 'ListCallbackEvents'],
  queue: 'CallbacksListCallbackEvents',
}
