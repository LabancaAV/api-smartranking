import { JogadorEntity } from 'src/jogadores/entities/jogador.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categorias')
export class CategoriaEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  categoria: string;

  @Column()
  descrição: string;

  @Column()
  eventos: string;

  @JoinTable()
  @OneToMany((type) => JogadorEntity, (jogador) => jogador.categoria, {
    cascade: true,
  })
  jogadores: JogadorEntity[];
}
