import { Jogador } from 'src/jogadores/interfaces/jogador.interface';

export interface Categoria {
    readonly categoria: string;
    descrição: string;
    jogadores: Array<Jogador>;
}

