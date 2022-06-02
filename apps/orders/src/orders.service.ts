import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  getHello(): string {
    return 'Hello World from services app!';
  }
}
