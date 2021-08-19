import { IsString } from "class-validator";

export class CriarEventoDto{
    @IsString()
    readonly nome: string;
    
    @IsString()
    operação: string;

    @IsString()
    valor: string;

}