# Deployment

An example deployment file (for GitHub and Azure DevOps) to deploy to Azure Static Web Apps should be [deploy.yml](.github/workflows/deploy.yml) the `.github/workflows` and [deploy-to-static-webapp.yml](.azurepipelines/deploy-to-static-webapp.yml) in the `.azurepipelines` folder respectively.

You can also use the Azure SWA CLI. More information can be found [here](https://azure.github.io/static-web-apps-cli/docs/use/deploy).

## For GitHub Actions

The pipeline file references variables declared in the repoistory.

Be sure to add the following variables `CLIENT_ID`, `TENANT_ID`, and the secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.

More documentation on how to add repoistory variables and secrets can be found [here](https://docs.github.com/en/actions/learn-github-actions/variables#creating-configuration-variables-for-a-repository).

## For Azure DevOps

The example file utilises a variable group called `static-app`.

Be sure to create or change the referenced variable group and populate it with the variables `CLIENT_ID`, `TENANT_ID`, and the secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.

More information of how to create and use variable groups can be found [here](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml).

**Please note** to create a variable group, please look at the "Classic" pipeline instructions to create them, but follow the YAML instructions on using them.
