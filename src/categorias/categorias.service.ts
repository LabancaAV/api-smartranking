import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { CategoriaEntity } from './entities/categorias.entity';
import { Categoria } from './interfaces/categorias.interface';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(CategoriaEntity)
        private readonly categoriaRepository: Repository<Categoria>,
    ) {}

    async criarCategoria(
        criarCategoriaDto: CriarCategoriaDto,
    ): Promise<Categoria> {
        const { categoria } = criarCategoriaDto;

        const categoriaEncontrada = await this.categoriaRepository.findOne({
            categoria,
        });

        if (categoriaEncontrada) {
            throw new BadRequestException(
                `Categoria ${categoria} já cadastrada`,
            );
        }

        console.log(categoriaEncontrada);

        return await this.categoriaRepository.save(categoriaEncontrada);
    }
}
