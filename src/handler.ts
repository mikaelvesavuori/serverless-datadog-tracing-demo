import { Context, APIGatewayEvent } from 'aws-lambda';
import { sendDistributionMetric } from 'datadog-lambda-js';
import { MikroLog } from 'mikrolog';
import tracer from './telemetry';

export async function handler(event: APIGatewayEvent, context: Context) {
  const logger = MikroLog.start({
    metadataConfig: {
      version: 1,
      owner: 'Sam Person',
      hostPlatform: 'aws',
      domain: 'Demo',
      system: 'POC',
      service: 'Datadog Demo',
      team: 'POC Team',
      tags: ['typescript', 'demo'],
      dataSensitivity: 'public',
      jurisdiction: 'EU'
    },
    event,
    context
  });

  const span = tracer.startSpan('my-datadog-tracing-test');
  span.setTag('customer_id', '123456');

  tracer.trace('greet', () => {
    console.log('Hello, World!');
    logger.info('Doing something inside the trace!');
  });

  logger.info('Doing something outside the trace!');

  sendDistributionMetric('coffee_house.order_value', 12.45, 'product:latte', 'order:online');

  return {
    statusCode: 200,
    body: JSON.stringify('OK')
  };
}
