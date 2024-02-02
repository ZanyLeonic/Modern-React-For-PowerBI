# Modern-React-For-PowerBI

A sample SPA implementing User-Owns-Data embedding using React-JS with functional components and hooks.

## Pipelines

|Pipeline       |Status    |
|---------------|----------|
|Azure DevOps   |[![Build Status](https://poweredbykurisu.visualstudio.com/Pipelines/_apis/build/status%2FZanyLeonic.Modern-React-For-PowerBI?branchName=main)](https://poweredbykurisu.visualstudio.com/Pipelines/_build/latest?definitionId=9&branchName=main)|
|GitHub Actions |[![Deploy WebApp to Azure Static Web Apps on push or pull request](https://github.com/ZanyLeonic/Modern-React-For-PowerBI/actions/workflows/deploy.yml/badge.svg)](https://github.com/ZanyLeonic/Modern-React-For-PowerBI/actions/workflows/deploy.yml)|

Example deployment: [https://powerbi-spa.leonic.co.uk](https://powerbi-spa.leonic.co.uk)

## Development

1. Run `npm i`
2. Create a .env file and put your `ClientId` and `TenantId` inside (example below)
3. Run `npm run start`
4. Your web app should begin to serve

### Example .env

```bash
TenantId="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
ClientId="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
```

## Build

1. Run `npm i`
2. Create a .env file and put your `ClientId` and `TenantId` inside (example below)
3. Run `npm run build`
4. Your web app should be stored in `dist/`

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md).