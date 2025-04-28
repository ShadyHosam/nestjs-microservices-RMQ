import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order-placed')
  handleOrderPlaced(@Payload()order:OrderDto){
    console.log("Handling placed order...");
      return this.appService.handlePlacedOrder(order);
  }

  @Get('allorders')
  getAllOrders(){
    
    return this.appService.getAllOrders();
  }
}
