import { Controller, Get, Param } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
  @Get(`clients/:id`)
  getClients(@Param('id') id: string) {
    return `Client number ${id}`;
  }
}
