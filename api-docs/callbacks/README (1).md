Callbacks are a way to subscribe to push notifications for events you're interested in, such as `PaymentInitiated`. They exist to relieve you from having to actively, manually check whether an event has occurred, automating the process of finding out about the occurrence.

For example, if a payment has been initiated, its `eventKind` flag is set to `PaymentInitiated`. The automated callback service watches for this event and sends notification to all entities who have subscribed to this event as soon as it occurs.

