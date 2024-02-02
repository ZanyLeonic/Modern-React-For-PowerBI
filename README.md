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

An example deployment file (for GitHub and Azure DevOps) to deploy to Azure Static Web Apps should be located in the `.github/workflows` and `.azurepipelines` folder respectively.

### For GitHub Actions

The pipeline file references variables declared in the repoistory.

Be sure to add the following variables `CLIENT_ID`, `TENANT_ID`, and the secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.

More documentation on how to add repoistory variables and secrets can be found [here](https://docs.github.com/en/actions/learn-github-actions/variables#creating-configuration-variables-for-a-repository).

### For Azure DevOps

The example file utilises a variable group called `static-app`.

Be sure to create or change the referenced variable group and populate it with the variables `CLIENT_ID`, `TENANT_ID`, and the secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.

More information of how to create and use variable groups can be found [here](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml).

**Please note** to create a variable group, please look at the "Classic" pipeline instructions to create them, but follow the YAML instructions on using them.
