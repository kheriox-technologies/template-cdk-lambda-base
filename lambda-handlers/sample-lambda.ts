import { Handler } from 'aws-lambda';
import * as utils from '/opt/utils';

export const handler: Handler = async (event, context) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      // Print Event
      utils.logInfo(event, 'Event');
      resolve();
    } catch (error: any) {
      utils.logError(error);
      reject();
    }
  });
};
