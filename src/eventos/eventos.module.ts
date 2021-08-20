import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { EventoEntity } from './entities/eventos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity])],
  controllers: [EventosController],
  providers: [EventosService]
})
export class EventosModule {}
