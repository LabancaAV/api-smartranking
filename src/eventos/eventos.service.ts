import { BadRequestException, Injectable } from '@nestjs/common';
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
        const { nome } = criarEventoDto;
        const eventoEncontrado = await this.eventoRepository.findOne({nome});
        if(eventoEncontrado){
            throw new BadRequestException(
                `Evento ${eventoEncontrado} já cadastrado`
            )
        }
        return this.eventoRepository.save(criarEventoDto);
    }

}
