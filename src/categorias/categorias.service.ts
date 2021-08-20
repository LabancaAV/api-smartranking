import { BadRequestException, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
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
        console.log(criarCategoriaDto);
        const { categoria } = criarCategoriaDto;

        const categoriaEncontrada = await this.categoriaRepository.findOne({
            categoria,
        });

        if (categoriaEncontrada) {
            throw new BadRequestException(
                `Categoria ${categoria} já cadastrada`,
            );
        }

        return await this.categoriaRepository.save(criarCategoriaDto);
    }

    async atualizarCategoria(
        _id: string, atualizarCategoriaDto: AtualizarCategoriaDto
    ): Promise<void>{
        const categoriaEncontrada = await this.categoriaRepository.findOne(_id);

        if(!categoriaEncontrada){
            throw new NotFoundException(`Categoria com identificador ${_id} não encontrada`);
        }

        this.categoriaRepository.update(_id, atualizarCategoriaDto);
    }

    async consultarCategoriaPeloId(_id: string): Promise<Categoria>{
        console.log(_id)
        const categoriaEncontrada = await this.categoriaRepository.findOne(_id);

        if(!categoriaEncontrada){
            throw new NotFoundException(`Categoria com identificador ${_id} não encontrada`);
        } else {
            
            return categoriaEncontrada;  
        
        }
    }

    async consultarTodasCategorias(): Promise<Categoria[]>{
        return await this.categoriaRepository.find({
        relations: ['jogador', 'evento'],
        });
    }

    async deletarCategoriaPeloId(_id: string): Promise<Categoria>{
        const categoriaEncontrada = await this.categoriaRepository.findOne(_id);

        if(!categoriaEncontrada){
            throw new NotFoundException(`Categoria com identificador ${_id} não encontrada`);
        } else {
            await this.categoriaRepository.delete(_id);
        }
        return categoriaEncontrada;

    }
}
