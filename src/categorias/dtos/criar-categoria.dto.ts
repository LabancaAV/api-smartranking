import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";
import { Evento } from "../interfaces/categorias.interface";

export class CriarCategoriaDto{

    @IsString()
    @IsNotEmpty()
    readonly categoria: string;

    @IsString()
    @IsNotEmpty()
    descrição: string;

    @IsArray()
    @ArrayMinSize(1)
    eventos: Array<Evento>

}