import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jogadores')
export class JogadorEntity {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column()
  telefoneCelular: string;

  @Column()
  email: string;

  @Column()
  nome: string;

  @Column()
  ranking: string;

  @Column()
  posicaoRanking: number;

  @Column()
  urlFotoJogador: string;
}
