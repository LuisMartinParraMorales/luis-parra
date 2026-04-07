# Local Dev Setup

Minimal setup notes for working on this repo with Node and the Vercel CLI.

## First-Time Setup

Run this once on a new machine:

```bash
cd /Users/luis.parramorales/dev/luis-parra

source ~/.bashrc
nvm install
nvm use

npm install -g vercel

vercel login
vercel link
vercel git connect
```

Notes:

- this repo uses the Node version pinned in [`.nvmrc`](/Users/luis.parramorales/dev/luis-parra/.nvmrc)
- `vercel link` creates `.vercel/project.json`
- `vercel git connect` is only needed once per repo after GitHub and Vercel are connected correctly

## Daily Start

Run this at the start of a normal session:

```bash
cd /Users/luis.parramorales/dev/luis-parra

source ~/.bashrc
nvm use

node -v
npm -v
vercel whoami
```

If the app dependencies have changed:

```bash
npm install
```

## Useful Commands

When the Next.js app exists:

```bash
npm run dev
vercel
vercel --prod
```

Use these for:

- `npm run dev`: local development
- `vercel`: preview deployment
- `vercel --prod`: production deployment

## If Node Is Missing

If `node` is not found in a fresh shell, run:

```bash
source ~/.bashrc
nvm use default
```

That usually fixes Codex and non-interactive shell sessions.
