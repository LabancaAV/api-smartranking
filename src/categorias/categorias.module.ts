import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';

@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
