import { Evento } from 'src/eventos/interfaces/eventos.interface';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';

export interface Categoria {
    readonly categoria: string;
    descrição: string;
    jogadores: Array<Jogador>;
    evento: string[];
}

