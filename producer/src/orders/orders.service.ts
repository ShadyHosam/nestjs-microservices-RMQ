import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
    // we injected the order service so we can notify the other service about the order when it gets done
    constructor(@Inject('ORDERS_SERVICE')private rabbitClient:ClientProxy){

    }
    // now we need to inject the order'se
    placeOrder(order:OrderDto){ 
            // save the order into the database and do the validation 
            console.log('Order has been placed');
            // notify the other service

            // emit refers to fire and forget ,, just a simple notification
           
            this.rabbitClient.emit('order-placed',order);
            // if the order placed then the other service will do it's task
    
        return {message:'the order has been placed'};
    
        }

}
