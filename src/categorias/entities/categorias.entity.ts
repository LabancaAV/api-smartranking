import { JogadorEntity } from 'src/jogadores/entities/jogador.entity';
import {
    Column,
    Entity,
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

    @OneToMany(
        () => JogadorEntity,
        (jogador: JogadorEntity) => jogador.categoria,
    )
    id_jogador: JogadorEntity[];
}
