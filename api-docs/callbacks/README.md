# Callbacks Overview

Callbacks are a way to subscribe to push notifications for events you're interested in, such as `PaymentInitiated`. They exist to relieve you from having to poll for whether an event has occurred, automating the process of finding out about the occurrence.

For example, if a payment has been initiated, a callback with an `eventKind` flag set to `PaymentInitiated` will watch for this event and send a notification to all entities who have subscribed to this event as soon as it occurs.
