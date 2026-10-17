# orus-pilot-calc

> **Temporary.** This repository is the provider in the pilot of [orus](https://github.com/zkbox/orus), a framework
> for repositories that work with AI agents. It will be deleted when the pilot ends.

A tiny calculator library.

```ts
import { add, subtract } from "orus-pilot-calc";

add(2, 3);      // 5
subtract(5, 3); // 2
```

## Install

From a release tag:

```sh
npm install github:zkbox/orus-pilot-calc#v0.1.0
```

## Develop

Node 24 or later.

```sh
npm install
npm test        # the gate: type check and tests
```

Each release is a tag `vX.Y.Z`, a GitHub release and an entry in [CHANGELOG.md](CHANGELOG.md).
