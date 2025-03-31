# telli website

The website is written in `Next.js`.

## requirements

1. [nvm](https://github.com/nvm-sh/nvm)

## development

Set the correct versions of the tools:

```sh
# set node version through the .nvmrc file
nvm use
# set the pnpm version through the package.json
corepack enable
corepack prepare
```

Install dependencies

```sh
pnpm i
```

Start the server (you will need environment variables for this to work properly).

```sh
pnpm dev
```

**Every push on master (main) will deploy the website on `telli.schule`.**

## Security issues

Please see [SECURITY.md](SECURITY.md) for guidance on reporting security-related issues.
