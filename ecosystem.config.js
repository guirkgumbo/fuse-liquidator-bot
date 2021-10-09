/** @format */

module.exports = {
  apps: [
    {
      name: "fuse-webhooks-bot",
      script: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",
      args: "run start",
      cron_restart: "0 * * * *", // Restart every hour.
      out_file:
        "C:\\Users\\rmcgu\\Development\\eth\\fuse-webhooks-bot\\logs.log",
    },
  ],
};
