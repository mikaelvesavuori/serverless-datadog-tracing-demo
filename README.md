# Serverless Datadog tracing demo

This is a basic, minimal demonstration of using logs and traces in Datadog in a serverless context. For tracing this uses the Datadog-provided [dd-trace](https://www.npmjs.com/package/dd-trace) library.

The rationale for this demonstration is that it's a bit problematic to actually get `dd-trace` to do anything, or even be built, using bundlers like `esbuild` or `Webpack`.

## Configuration

You will need to provide an API key (or use an alternative method) in `serverless.yml`.

## Run locally

Run `npm start`.

## Deploy to AWS

Run `npm run deploy`.

## Remove from AWS

Run `npm run teardown`.
