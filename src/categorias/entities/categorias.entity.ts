import { EventoEntity } from 'src/eventos/entities/eventos.entity';
import { JogadorEntity } from 'src/jogadores/entities/jogador.entity';
import {
    Column,
    Entity,
    JoinColumn,
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
    jogador: JogadorEntity[];

    @OneToMany(
        () => EventoEntity,
        (evento: EventoEntity) => evento.categoria,
    )
    @JoinColumn({ name: 'evento_id' })
    evento: EventoEntity[];
}
