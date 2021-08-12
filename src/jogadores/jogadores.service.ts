import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JogadorEntity } from './entities/jogador.entity';

@Injectable()
export class JogadoresService {
  constructor(
    @InjectRepository(JogadorEntity)
    private readonly jogadorRepository: Repository<Jogador>,
  ) {  }

  private readonly logger = new Logger(JogadoresService.name);

  async criarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    const { email } = criaJogadorDto;
    const jogadorEncontrado = await this.jogadorRepository.findOne({
      where: {
        email: email,
      },
    });
    console.log(jogadorEncontrado);
    if (jogadorEncontrado) {
      throw new BadRequestException(`Jogador com e-mail ${email} já cadastrado`)
    } 

    const { nome, telefoneCelular } = criaJogadorDto;
    const jogador: Jogador = {
      _id: uuid(),
      nome,
      telefoneCelular,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };

    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);

    this.jogadorRepository.save(jogador);
    
  }

  async atualizarJogador( _id: string, criaJogadorDto: CriarJogadorDto): Promise<void> {
    const jogadorEncontrado = await this.jogadorRepository.findOne(_id);

    if(!jogadorEncontrado){
      throw new NotFoundException(`Jogador com ${_id} não encontrado`);
    }
 
    this.jogadorRepository.update(_id, criaJogadorDto);

  }

  async consultarTodosJogadores(): Promise<Jogador[]> {
    return await this.jogadorRepository.find();
  }

  async consultarJogadorPeloId(_id: string): Promise<Jogador> {
    const jogadorEncontrado = await this.jogadorRepository.findOne(_id);
    if (!jogadorEncontrado) {
      throw new NotFoundException(`Jogador com e-mail ${_id} não encontrado`);
    } else {
      return jogadorEncontrado;
    }
  }

  async deletarJogador(_id: string): Promise<void> {
    const jogadorEncontrado = await this.jogadorRepository.findOne(_id);
    if (!jogadorEncontrado) {
      throw new NotFoundException(`Jogador com e-mail ${_id} não encontrado`);
    }
    this.jogadorRepository.delete(jogadorEncontrado);
  }

}
