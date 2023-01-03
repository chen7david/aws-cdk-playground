import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class AwsCdkPlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'LambdaFuction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      functionName: 'first-cdk-lambda',
      code: lambda.Code.fromAsset('src'),
      handler: 'index.handler',
      memorySize: 128
    })
  }
}
