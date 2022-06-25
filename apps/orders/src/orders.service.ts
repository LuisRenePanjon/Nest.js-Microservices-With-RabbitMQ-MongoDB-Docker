import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersResository: OrdersRepository ){}

  async createOrder(request: CreateOrderRequest) {
    // create order with default id 
    return this.ordersResository.create(request);
  }
}
