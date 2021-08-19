import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarEventoDto } from './dtos/criar-evento.dto';
import { EventosService } from './eventos.service';
import { Evento } from './interfaces/eventos.interface';

@Controller('api/v1/eventos')
export class EventosController {
    constructor(private readonly eventoService: EventosService){}

    @Post()
    @UsePipes(ValidationPipe)
    async criarEvento(
        @Body() criarEventoDto: CriarEventoDto
        ): Promise<Evento>{
            return await this.eventoService.criarEvento(criarEventoDto);
    }

}
