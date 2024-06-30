import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Hola Mundo de Node';
  }

  /** GETTING NRMAL PARAMS */
  @Get(`endpoint1`)
  endpoint1() {
    return `I'm new 1`;
  }

  @Get(`endpoint2`)
  endpoint2() {
    return `I'm new 2`;
  }
}
