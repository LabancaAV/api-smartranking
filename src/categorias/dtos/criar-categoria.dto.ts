import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';


export class CriarCategoriaDto {
    @IsString()
    @IsNotEmpty()
    readonly categoria: string;

    @IsString()
    @IsNotEmpty()
    descrição: string;

}
