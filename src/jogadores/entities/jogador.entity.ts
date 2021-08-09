import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jogadores')
export class JogadorEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ type: 'varchar' })
  telefoneCelular: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  ranking: string;

  @Column({ type: 'integer' })
  posicaoRanking: number;

  @Column({ type: 'varchar' })
  urlFotoJogador: string;
}
