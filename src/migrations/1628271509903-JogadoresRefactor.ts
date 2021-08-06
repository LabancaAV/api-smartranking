import { query } from 'express';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class JogadoresRefactor1628271509903 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "jogadores" RENAME COLUMN "nome" TO "nomejogador"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "jogadores" RENAME COLUMN "nomejogador" TO "nome"`,
    );
  }
}
