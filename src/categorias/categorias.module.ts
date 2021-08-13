import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogadorEntity } from 'src/jogadores/entities/jogador.entity';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { CategoriaEntity } from './entities/categorias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntity, JogadorEntity])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
