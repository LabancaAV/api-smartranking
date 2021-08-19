import { Injectable } from '@nestjs/common';
import { CriarEventoDto } from './dtos/criar-evento.dto';
import { Evento } from './interfaces/eventos.interface';

@Injectable()
export class EventosService {

    async criarEvento(criarEventoDto: CriarEventoDto): Promise<Evento>{
        return 
    }

}
