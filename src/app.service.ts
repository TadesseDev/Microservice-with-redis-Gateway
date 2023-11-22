import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy) {}
  getHello(): string {
    console.log("emitting service")
    this.client.emit<number>('add', [1, 2]);
    return 'Hello World!';
  }
}
