# Webhook Receiver

A node script to receive forwarded webhooks from Webhook Buddy Client.

## Setup

```
git clone https://github.com/webhookbuddy/webhook-receiver.git
cd webhook-receiver
npm ci
```

## Run

`npm start`

## Features

- configurable delay in receiving webhooks by changing Forwarded Url Endpoint on the Webhook Buddy Client
- default: `http://localhost:8020/`
- delay : `http://localhost:8020/?delay=2000`
