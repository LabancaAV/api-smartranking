import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1629420234898 implements MigrationInterface {
    name = 'Migrations1629420234898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "eventos" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "operação" character varying NOT NULL, "valor" integer NOT NULL, "categoria_id" uuid, CONSTRAINT "PK_01402264bb715d3d881bddf66bf" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "jogadores" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "telefoneCelular" character varying NOT NULL, "email" character varying NOT NULL, "nome" character varying NOT NULL, "ranking" character varying NOT NULL, "posicaoRanking" integer NOT NULL, "urlFotoJogador" character varying NOT NULL, "categoria_id" uuid, CONSTRAINT "PK_ee64b346dd6f61f2b1c2adf1946" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "categorias" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "categoria" character varying NOT NULL, "descrição" character varying NOT NULL, CONSTRAINT "PK_88d50790c2aca1fa6256efb3099" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`ALTER TABLE "eventos" ADD CONSTRAINT "FK_09bd5bf293a9c4ad730dc9cd61f" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jogadores" ADD CONSTRAINT "FK_eb59ad57f1c6155ee36b051a3d4" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jogadores" DROP CONSTRAINT "FK_eb59ad57f1c6155ee36b051a3d4"`);
        await queryRunner.query(`ALTER TABLE "eventos" DROP CONSTRAINT "FK_09bd5bf293a9c4ad730dc9cd61f"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`DROP TABLE "jogadores"`);
        await queryRunner.query(`DROP TABLE "eventos"`);
    }

}
