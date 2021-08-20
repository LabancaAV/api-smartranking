import { CategoriaEntity } from "src/categorias/entities/categorias.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('eventos')
export class EventoEntity{
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    nome: string;

    @Column()
    operação: string;

    @Column()
    valor: number;

    @ManyToOne(() => CategoriaEntity, {
        eager: true,
        cascade: true
    })
    categoria: CategoriaEntity;
}