import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class HelloLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const helloLambda = new lambda.Function(this, 'hellolambda', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset('lambda'),
    });
  }
}
