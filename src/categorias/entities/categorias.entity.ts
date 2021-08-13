import { JogadorEntity } from "src/jogadores/entities/jogador.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evento } from "../interfaces/categorias.interface";

@Entity('categorias')
export class CategoriaEntity{
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    categoria: string;

    @Column()
    descrição: string;

    @Column()
    eventos: string;
    
    @JoinTable()
    @OneToMany(type => JogadorEntity, (jogador) => jogador.categoria)
    jogadores: JogadorEntity[];


}