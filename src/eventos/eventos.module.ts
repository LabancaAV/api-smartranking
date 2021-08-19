import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';

@Module({
  providers: [EventosService],
  controllers: [EventosController]
})
export class EventosModule {}
