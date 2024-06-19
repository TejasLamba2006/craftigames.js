# craftigames.js

craftigames.js is an NPM package that helps to interact with the public API's of CraftiGames Server's i.e Pika Network and Jartex Network.

## Features

- Fully type-safe
- Complete type safety in runtime with zod
- Easy to understand
- Fully promise-based
- Built with modern and blazing fast technology
- Supports both CommonJS and ESModules

## Installation

```sh
npm install craftigames.js
yarn add craftigames.js
pnpm add craftigames.js
```

## Usage

## Pika Network

```js
import Pika from "craftigames.js";
// or
const Pika = require("craftigames.js");

const pika = new Pika.PikaNetwork();
pika.getTotalLeaderboard(Pika.PikaNetworkGamemode.BedWars);
pika.getLeaderboard({
  gamemode: Pika.PikaNetworkGamemode.BedWars,
  leaderboardType: Pika.PikaNetworkLeaderboardType.Kills,
  interval: Pika.PikaNetworkInterval.Weekly, // Not required, defaults to PikaNetworkInterval.AllTime
  mode: Pika.PikaNetworkMode.Solo, // Not required, defaults to PikaNetworkMode.AllModes
  limit: 10, // Not required, defaults to 15
  offset: 15, // Not required, defaults to 0
});
pika.getProfile("TejasIsPro");
pika.getProfileLeaderboard({
  username: "TejasIsPro",
  gamemode: Pika.PikaNetworkGamemode.BedWars,
  interval: Pika.PikaNetworkInterval.Weekly, // Not required, defaults to PikaNetworkInterval.AllTime
  mode: Pika.PikaNetworkMode.Solo, // Not required, defaults to PikaNetworkMode.AllModes
  limit: 10, // Not required, defaults to 15
});
pika.getRecap("d1a2a364-148a-4efe-af1e-f40cd7973d4f");
```

## Jartex Network

```ts
import Jartex from "craftigames.js";
// or
const Jartex = require("craftigames.js");

const Jartex = new Jartex.JartexNetwork();
Jartex.getTotalLeaderboard(Jartex.JartexNetworkGamemode.BedWars);
Jartex.getLeaderboard({
  gamemode: Jartex.JartexNetworkGamemode.BedWars,
  leaderboardType: Jartex.JartexNetworkLeaderboardType.Kills,
  interval: Jartex.JartexNetworkInterval.Weekly, // Not required, defaults to JartexNetworkInterval.AllTime
  mode: Jartex.JartexNetworkMode.Solo, // Not required, defaults to JartexNetworkMode.AllModes
  limit: 10, // Not required, defaults to 15
  offset: 15, // Not required, defaults to 0
});
Jartex.getProfile("WildRiya");
Jartex.getProfileLeaderboard({
  username: "WildRiya",
  gamemode: Jartex.JartexNetworkGamemode.BedWars,
  interval: Jartex.JartexNetworkInterval.Weekly, // Not required, defaults to JartexNetworkInterval.AllTime
  mode: Jartex.JartexNetworkMode.Solo, // Not required, defaults to JartexNetworkMode.AllModes
  limit: 10, // Not required, defaults to 15
});
Jartex.getRecap("d1a2a364-148a-4efe-af1e-f40cd7973d4f");
```
