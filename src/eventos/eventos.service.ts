import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarEventoDto } from './dtos/criar-evento.dto';
import { EventoEntity } from './entities/eventos.entity';
import { Evento } from './interfaces/eventos.interface';

@Injectable()
export class EventosService {
    constructor(
        @InjectRepository(EventoEntity)
        private readonly eventoRepository: Repository<Evento>,
    ){}


    async criarEvento(criarEventoDto: CriarEventoDto): Promise<Evento>{
        return this.eventoRepository.save(criarEventoDto);
    }

}
