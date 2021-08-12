import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';

@Module({
  controllers: [CategoriasController]
})
export class CategoriasModule {}
