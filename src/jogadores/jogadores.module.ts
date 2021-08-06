import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';
import { JogadorEntity } from './entities/jogador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JogadorEntity])],
  controllers: [JogadoresController],
  providers: [JogadoresService],
})
export class JogadoresModule {}
