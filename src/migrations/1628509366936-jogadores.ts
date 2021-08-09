import { MigrationInterface, QueryRunner } from 'typeorm';

export class jogadores1628509366936 implements MigrationInterface {
  name = 'jogadores1628509366936';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "jogadores" ("_id" SERIAL NOT NULL, "telefoneCelular" character varying NOT NULL, "email" character varying NOT NULL, "nome" character varying NOT NULL, "ranking" character varying NOT NULL, "posicaoRanking" integer NOT NULL, "urlFotoJogador" character varying NOT NULL, CONSTRAINT "PK_ee64b346dd6f61f2b1c2adf1946" PRIMARY KEY ("_id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "jogadores"`);
  }
}
