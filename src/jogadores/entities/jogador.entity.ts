import { CategoriaEntity } from 'src/categorias/entities/categorias.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(type => CategoriaEntity, (categoria) => categoria.categoria)
  categoria: CategoriaEntity;

}
