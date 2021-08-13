import { Jogador } from "src/jogadores/interfaces/jogador.interface";

export interface Categoria{

    readonly categoria: string;
    descrição: string;
    eventos: Array<Evento>;
    jogadores: Array<Jogador>

}

export interface Evento{

    nome: string;
    operação: string;
    valor: number;

}


