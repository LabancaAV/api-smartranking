import {MigrationInterface, QueryRunner} from "typeorm";

export class Facotr1629244906570 implements MigrationInterface {
    name = 'Facotr1629244906570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "jogadores" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "telefoneCelular" character varying NOT NULL, "email" character varying NOT NULL, "nome" character varying NOT NULL, "ranking" character varying NOT NULL, "posicaoRanking" integer NOT NULL, "urlFotoJogador" character varying NOT NULL, "categoria_id" uuid, CONSTRAINT "PK_ee64b346dd6f61f2b1c2adf1946" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "categorias" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "categoria" character varying NOT NULL, "descrição" character varying NOT NULL, CONSTRAINT "PK_88d50790c2aca1fa6256efb3099" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`ALTER TABLE "jogadores" ADD CONSTRAINT "FK_eb59ad57f1c6155ee36b051a3d4" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jogadores" DROP CONSTRAINT "FK_eb59ad57f1c6155ee36b051a3d4"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`DROP TABLE "jogadores"`);
    }

}
