import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1756547782876 implements MigrationInterface {
  name = 'Init1756547782876';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ambulatori" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "descrizioneAmbulatorio" varchar(100) NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "esami" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "codiceMinisteriale" varchar(10) NOT NULL, "codiceInterno" varchar(10) NOT NULL, "descrizioneEsame" varchar(100) NOT NULL, "posizioneId" integer NOT NULL, CONSTRAINT "UQ_85acdc687538cb9a335377c7ab7" UNIQUE ("codiceInterno"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posizioni" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "descrizionePosizione" varchar(100) NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "esami_ambulatori" ("esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, PRIMARY KEY ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0879125534988579221ab087f5" ON "esami_ambulatori" ("esameId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dca25925ac06aa9f147e2ddf95" ON "esami_ambulatori" ("ambulatorioId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_esami" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "codiceMinisteriale" varchar(10) NOT NULL, "codiceInterno" varchar(10) NOT NULL, "descrizioneEsame" varchar(100) NOT NULL, "posizioneId" integer NOT NULL, CONSTRAINT "UQ_85acdc687538cb9a335377c7ab7" UNIQUE ("codiceInterno"), CONSTRAINT "FK_a88d8d5db18fdaf402588593fd2" FOREIGN KEY ("posizioneId") REFERENCES "posizioni" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_esami"("id", "codiceMinisteriale", "codiceInterno", "descrizioneEsame", "posizioneId") SELECT "id", "codiceMinisteriale", "codiceInterno", "descrizioneEsame", "posizioneId" FROM "esami"`,
    );
    await queryRunner.query(`DROP TABLE "esami"`);
    await queryRunner.query(`ALTER TABLE "temporary_esami" RENAME TO "esami"`);
    await queryRunner.query(`DROP INDEX "IDX_0879125534988579221ab087f5"`);
    await queryRunner.query(`DROP INDEX "IDX_dca25925ac06aa9f147e2ddf95"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_esami_ambulatori" ("esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, CONSTRAINT "fk_esami_ambulatori_esame" FOREIGN KEY ("esameId") REFERENCES "esami" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "fk_esami_ambulatori_ambulatorio" FOREIGN KEY ("ambulatorioId") REFERENCES "ambulatori" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_esami_ambulatori"("esameId", "ambulatorioId") SELECT "esameId", "ambulatorioId" FROM "esami_ambulatori"`,
    );
    await queryRunner.query(`DROP TABLE "esami_ambulatori"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_esami_ambulatori" RENAME TO "esami_ambulatori"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0879125534988579221ab087f5" ON "esami_ambulatori" ("esameId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dca25925ac06aa9f147e2ddf95" ON "esami_ambulatori" ("ambulatorioId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_dca25925ac06aa9f147e2ddf95"`);
    await queryRunner.query(`DROP INDEX "IDX_0879125534988579221ab087f5"`);
    await queryRunner.query(
      `ALTER TABLE "esami_ambulatori" RENAME TO "temporary_esami_ambulatori"`,
    );
    await queryRunner.query(
      `CREATE TABLE "esami_ambulatori" ("esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, PRIMARY KEY ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "esami_ambulatori"("esameId", "ambulatorioId") SELECT "esameId", "ambulatorioId" FROM "temporary_esami_ambulatori"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_esami_ambulatori"`);
    await queryRunner.query(
      `CREATE INDEX "IDX_dca25925ac06aa9f147e2ddf95" ON "esami_ambulatori" ("ambulatorioId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0879125534988579221ab087f5" ON "esami_ambulatori" ("esameId") `,
    );
    await queryRunner.query(`ALTER TABLE "esami" RENAME TO "temporary_esami"`);
    await queryRunner.query(
      `CREATE TABLE "esami" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "codiceMinisteriale" varchar(10) NOT NULL, "codiceInterno" varchar(10) NOT NULL, "descrizioneEsame" varchar(100) NOT NULL, "posizioneId" integer NOT NULL, CONSTRAINT "UQ_85acdc687538cb9a335377c7ab7" UNIQUE ("codiceInterno"))`,
    );
    await queryRunner.query(
      `INSERT INTO "esami"("id", "codiceMinisteriale", "codiceInterno", "descrizioneEsame", "posizioneId") SELECT "id", "codiceMinisteriale", "codiceInterno", "descrizioneEsame", "posizioneId" FROM "temporary_esami"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_esami"`);
    await queryRunner.query(`DROP INDEX "IDX_dca25925ac06aa9f147e2ddf95"`);
    await queryRunner.query(`DROP INDEX "IDX_0879125534988579221ab087f5"`);
    await queryRunner.query(`DROP TABLE "esami_ambulatori"`);
    await queryRunner.query(`DROP TABLE "posizioni"`);
    await queryRunner.query(`DROP TABLE "esami"`);
    await queryRunner.query(`DROP TABLE "ambulatori"`);
  }
}
