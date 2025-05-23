import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  // we need to create a connection between our service and rabbitmq 


  const app = await NestFactory.create(AppModule);

    app.connectMicroservice(<MicroserviceOptions>({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'orders-queue',
      },
    }))

    await app.startAllMicroservices();
    await app.listen(3001);
}
bootstrap();
