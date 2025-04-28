import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'ORDERS_SERVICE',
        transport:Transport.RMQ,
        options:{
          urls: ['amqp://localhost:5672'],
          queue:'orders-queue'
        },
        
      }
    ]),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
