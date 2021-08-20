import { IsNumber, IsString } from "class-validator";

export class CriarEventoDto{
    @IsString()
    readonly nome: string;
    
    @IsString()
    operação: string;

    @IsNumber()
    valor: number;

    @IsString()
    categoria: string;

}