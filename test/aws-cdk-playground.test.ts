import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as MyFirstCdk from '../lib/aws-cdk-playground-stack'

// example test. To run these tests, uncomment this file along with the
// example resource in lib/aws-cdk-playground-stack.ts
test('My First Stack Created', () => {
    const app = new cdk.App();
    const stack = new MyFirstCdk.AwsCdkPlaygroundStack(app, 'MyTestStack')
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
        FunctionName: 'first-cdk-lambda',
        Runtime: 'nodejs16.x',
        Handler: 'index.handler',
        MemorySize: 128
    })
});
