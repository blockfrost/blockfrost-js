<img src="https://blockfrost.io/images/logo.svg" align="left" height="30" /><br>

## Demo: Asset explorer

This repository provides a demo application build on top of _Blockfrost.io_, Cardano API-as-a-Service.

You can see the demo itself running on [cardano-tokens.com](https://cardano-tokens.com) or you can run your own if you do not trust our funny accents.

### Before you start

Make sure you have downloaded and installed [Node.js LTS](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/lang/en/docs/install/) and git or just run `nix-shell` if you are using NixOS.

Login to the [blockfrost.io](https://blockfrost.io). Create a project and get your API key.

<img src="https://i.imgur.com/smY12ro.png">
<br/>
<br/>

Once you have it, rename `.env.example` → `.env` and insert your API key.

### Run locally

```bash
$ yarn
$ yarn dev
```

Go to http://localhost:3000/.

### Run inside docker

Build the docker image.

```bash
$ docker build -t blockfrost-demo-asset-explorer .
```

Run the application container.

```bash
$ docker run -dp 3000:3000 blockfrost-demo-asset-explorer:latest
```

Go to http://localhost:3000/ and enjoy.
