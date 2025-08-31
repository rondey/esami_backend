import { MigrationInterface, QueryRunner } from 'typeorm';

export class DescriptionsRequiredAmbAndPos1756549670207
  implements MigrationInterface
{
  name = 'DescriptionsRequiredAmbAndPos1756549670207';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_ambulatori" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "descrizioneAmbulatorio" varchar(100) NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_ambulatori"("id", "descrizioneAmbulatorio") SELECT "id", "descrizioneAmbulatorio" FROM "ambulatori"`,
    );
    await queryRunner.query(`DROP TABLE "ambulatori"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_ambulatori" RENAME TO "ambulatori"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_posizioni" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "descrizionePosizione" varchar(100) NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_posizioni"("id", "descrizionePosizione") SELECT "id", "descrizionePosizione" FROM "posizioni"`,
    );
    await queryRunner.query(`DROP TABLE "posizioni"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_posizioni" RENAME TO "posizioni"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_ambulatori" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "descrizioneAmbulatorio" varchar(100) NOT NULL, CONSTRAINT "UQ_012be835e395c9dd2c0e9d1282f" UNIQUE ("descrizioneAmbulatorio"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_ambulatori"("id", "descrizioneAmbulatorio") SELECT "id", "descrizioneAmbulatorio" FROM "ambulatori"`,
    );
    await queryRunner.query(`DROP TABLE "ambulatori"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_ambulatori" RENAME TO "ambulatori"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_posizioni" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "descrizionePosizione" varchar(100) NOT NULL, CONSTRAINT "UQ_3db8642c9f1031aac250bac9e71" UNIQUE ("descrizionePosizione"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_posizioni"("id", "descrizionePosizione") SELECT "id", "descrizionePosizione" FROM "posizioni"`,
    );
    await queryRunner.query(`DROP TABLE "posizioni"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_posizioni" RENAME TO "posizioni"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // rollback: togliamo il vincolo UNIQUE da ambulatori
    await queryRunner.query(`
      CREATE TABLE "temporary_ambulatori" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "descrizioneAmbulatorio" varchar(100) NOT NULL
      )
    `);
    await queryRunner.query(`
      INSERT INTO "temporary_ambulatori"("id", "descrizioneAmbulatorio")
      SELECT "id", "descrizioneAmbulatorio" FROM "ambulatori"
    `);
    await queryRunner.query(`DROP TABLE "ambulatori"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_ambulatori" RENAME TO "ambulatori"`,
    );

    // rollback: togliamo il vincolo UNIQUE da posizioni
    await queryRunner.query(`
      CREATE TABLE "temporary_posizioni" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "descrizionePosizione" varchar(100) NOT NULL
      )
    `);
    await queryRunner.query(`
      INSERT INTO "temporary_posizioni"("id", "descrizionePosizione")
      SELECT "id", "descrizionePosizione" FROM "posizioni"
    `);
    await queryRunner.query(`DROP TABLE "posizioni"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_posizioni" RENAME TO "posizioni"`,
    );
  }
}
