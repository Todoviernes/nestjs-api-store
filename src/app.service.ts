import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Oelooo';
  }

  getTest(): string {
    return 'Test';
  }
}
