import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConfermeCreate1756645973292 implements MigrationInterface {
  name = 'ConfermeCreate1756645973292';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "conferme" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, CONSTRAINT "REL_51cb4ce75e8c29174ef300330a" UNIQUE ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_conferme" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, CONSTRAINT "REL_51cb4ce75e8c29174ef300330a" UNIQUE ("esameId", "ambulatorioId"), CONSTRAINT "FK_51cb4ce75e8c29174ef300330a0" FOREIGN KEY ("esameId", "ambulatorioId") REFERENCES "esami_ambulatori" ("esameId", "ambulatorioId") ON DELETE RESTRICT ON UPDATE RESTRICT)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_conferme"("id", "created_at", "esameId", "ambulatorioId") SELECT "id", "created_at", "esameId", "ambulatorioId" FROM "conferme"`,
    );
    await queryRunner.query(`DROP TABLE "conferme"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_conferme" RENAME TO "conferme"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conferme" RENAME TO "temporary_conferme"`,
    );
    await queryRunner.query(
      `CREATE TABLE "conferme" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, CONSTRAINT "REL_51cb4ce75e8c29174ef300330a" UNIQUE ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "conferme"("id", "created_at", "esameId", "ambulatorioId") SELECT "id", "created_at", "esameId", "ambulatorioId" FROM "temporary_conferme"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_conferme"`);
    await queryRunner.query(`DROP TABLE "conferme"`);
  }
}
