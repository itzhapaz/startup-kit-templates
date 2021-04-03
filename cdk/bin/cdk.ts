#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CdkStack } from "../lib/cdk-stack";
import * as config from "../app.config.json";

const app = new cdk.App();
new CdkStack(app, "CdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT ?? config.accountId,
    region: process.env.CDK_DEFAULT_REGION ?? config.region,
  },
});
