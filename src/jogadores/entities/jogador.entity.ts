import { CategoriaEntity } from 'src/categorias/entities/categorias.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

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

    @ManyToOne(() => CategoriaEntity, {
        eager: true,
    })
    @JoinColumn({ name: 'categoria_id' })
    categoria: CategoriaEntity;
}
