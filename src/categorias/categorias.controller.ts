import {
    Body,
    Controller,
    Put,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
    Get,
} from '@nestjs/common';
import { JogadoresValidacaoParametrosPipe } from 'src/jogadores/pipes/jogadores-validacao-parametros-pipes';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categorias.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
    constructor(private readonly categoriaService: CategoriasService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async criarCategoria(
        @Body() criarCategoriaDto: CriarCategoriaDto,
    ): Promise<Categoria> {
        return await this.categoriaService.criarCategoria(criarCategoriaDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async atualizarCategoria(
        @Body() atualizarCategoriaDto: AtualizarCategoriaDto,
        @Param('_id', JogadoresValidacaoParametrosPipe) _id: string
    ): Promise<void>{
        await this.categoriaService.atualizarCategoria(_id, atualizarCategoriaDto);
    }

    @Get(':_id')
    async consultarCategoriaPeloId(
        @Param() _id: string
    ): Promise<Categoria>{
        return await this.categoriaService.consultarCategoriaPeloId(_id);
    }

}
