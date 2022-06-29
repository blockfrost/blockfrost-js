# blockfrost-js-example-webhook-slack

This examples shows how to build a simple app that sends a message via Slack after receiving a webhook request sent by Blockfrost. It implements webhook endpoint and integrates with Slack API to send a message to a Slack workspace.

To learn more about Secure Webhooks, see [Secure Webhooks Docs](https://blockfrost.dev/docs/start-building/webhooks/).

_This example is written in Typescript and it is intended to run on Node.js, not in a browser. Follow the instructions below to run it._

## How to use

_These instructions assume that you already have Node.js installed and you are already familiar with running hello world on Node.js._

### Create a Slack bot

Create a slack app and generate Bot User OAuth Token by following [Slack: Basic app setup](https://api.slack.com/authentication/basics)

### Set environment variables

- `SECRET_AUTH_TOKEN` - You will find your webhook's secret auth token in your Secure Webhook settings in the Blockfrost Dashboard
- `PORT` - port for the web server (default `6666`)
- `SLACK_BOT_TOKEN` - Slack Bot User OAuth Token (`xob-...`). You can find it under "OAuth & Permissions" section of [Slack App settings](https://api.slack.com/apps/)
- `SLACK_CHANNEL_ID` - ID of the Slack channel where to send a notification

#### Install dependencies and run the app

```
yarn install
yarn workspace @blockfrost/example-webhook-slack start
```
