# whb-forwarding
A node script to receive forwarded webhooks from Webhook Buddy Client. Added delay feature to test performance of UI on Client

## Setup
```
git clone git@github.com:webhook-buddies/webhook-buddy-test.git
cd <cloned-repo-name>
npm install
```

## Execute node server locally
`npm start`

## Features
- configurable delay in receiving webhooks by changing Forwarded Url Endpoint on the WBH Client
- default: `http://localhost:8080/`
- delay  : `http://localhost:8080/?delay=2000`
