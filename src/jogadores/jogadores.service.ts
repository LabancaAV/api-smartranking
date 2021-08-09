import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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
  ) {}

  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    const { email } = criaJogadorDto;
    const jogadorEncontrado = await this.jogadorRepository.findOne({
      where: {
        email: email,
      },
    });
    console.log(jogadorEncontrado);
    if (jogadorEncontrado) {
      await this.atualizar(jogadorEncontrado, criaJogadorDto);
    } else {
      this.criar(criaJogadorDto);
    }
  }

  async consultarTodosJogadores(): Promise<Jogador[]> {
    return await this.jogadorRepository.find();
  }

  async consultarJogadoresPeloEmail(email: string): Promise<Jogador> {
    const jogadorEncontrado = await this.jogadorRepository.findOne({
      where: {
        email: email,
      },
    });
    if (!jogadorEncontrado) {
      throw new NotFoundException(`Jogador com e-mail ${email} não encontrado`);
    } else {
      return jogadorEncontrado;
    }
  }

  async deletarJogador(email: string): Promise<void> {
    const jogadorEncontrado = await this.jogadorRepository.findOne(email);
    this.jogadorRepository.delete(jogadorEncontrado);
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { nome, telefoneCelular, email } = criaJogadorDto;
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

  private async atualizar(
    jogadorEncontrado: JogadorEntity,
    criarJogadorDto: CriarJogadorDto,
  ): Promise<void> {
    this.jogadorRepository.update(jogadorEncontrado._id, criarJogadorDto);
  }
}
