# Modern-React-For-PowerBI

A sample SPA implementing User-Owns-Data embedding using React-JS with functional components and hooks.

## Development

1. Run `npm i`
2. Create a .env file and put your `ClientId` and `TenantId` inside (example below)
3. Run `npm run start`
4. Your web app should begin to serve

## Build

1. Run `npm i`
2. Create a .env file and put your `ClientId` and `TenantId` inside (example below)
3. Run `npm run build`
4. Your web app should be stored in `dist/`

## Deployment

An example deployment file (for GitHub) to deploy to Azure Static Web Apps should be located in the `.github/workflows` folder.

You will need to declare your ClientId and TenantId in the environment within your pipeline for it work. 

## Example .env

```bash
TenantId="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
ClientId="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
```
