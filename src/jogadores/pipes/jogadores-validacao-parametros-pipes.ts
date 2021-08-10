import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class JogadoresValidacaoParametrosPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(
        `O valor do parâmetro ${metadata.data} deve ser informado!`,
      );
    }

    console.log(`value: ${value} metadata: ${metadata.type}`);

    return value;
  }
}
