import { IsNotEmpty, IsString } from "class-validator";

export class AtualizarCategoriaDto{
    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsString()
    @IsNotEmpty()
    descrição: string;

}