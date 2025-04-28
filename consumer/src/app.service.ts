/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Get, Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { timestamp } from 'rxjs';

@Injectable()
export class AppService {
  private readonly orders:any[] =[];
  getHello(): string {
    return 'Hello World!';
  }

  handlePlacedOrder(order:OrderDto){
      console.log("the new order has been placed");
     this.orders.push({
      orderDetails:order,
      timestamp:new Date()
     })
  }

 
  getAllOrders(){
    console.log('order has been placed , im the consumer');
    return({
      data:this.orders
    })
  }




}
