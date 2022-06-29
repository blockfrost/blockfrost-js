import { WebClient, LogLevel } from "@slack/web-api";

const client = new WebClient(process.env.SLACK_BOT_TOKEN, {
  logLevel: LogLevel.INFO,
});

const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID ?? "";

export const publishSlackMessage = async (text: string) => {
  // Post a message to a channel your app is in using ID and message text
  try {
    // Call the chat.postMessage method using the built-in WebClient
    await client.chat.postMessage({
      channel: SLACK_CHANNEL_ID,
      text: text,
    });

    // Print result, which includes information about the message (like TS)
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
};
