// CDK
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

// Types
import { CDKContext } from '../shared/types';

export class CDKBaseStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps, context: CDKContext) {
    super(scope, id, props);
  }
}
