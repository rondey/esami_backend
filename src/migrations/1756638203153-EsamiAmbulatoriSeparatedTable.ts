import { MigrationInterface, QueryRunner } from 'typeorm';

export class EsamiAmbulatoriSeparatedTable1756638203153
  implements MigrationInterface
{
  name = 'EsamiAmbulatoriSeparatedTable1756638203153';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_dca25925ac06aa9f147e2ddf95"`);
    await queryRunner.query(`DROP INDEX "IDX_0879125534988579221ab087f5"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_esami_ambulatori" ("esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, PRIMARY KEY ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_esami_ambulatori"("esameId", "ambulatorioId") SELECT "esameId", "ambulatorioId" FROM "esami_ambulatori"`,
    );
    await queryRunner.query(`DROP TABLE "esami_ambulatori"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_esami_ambulatori" RENAME TO "esami_ambulatori"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dca25925ac06aa9f147e2ddf95" ON "esami_ambulatori" ("ambulatorioId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0879125534988579221ab087f5" ON "esami_ambulatori" ("esameId") `,
    );
    await queryRunner.query(`DROP INDEX "IDX_dca25925ac06aa9f147e2ddf95"`);
    await queryRunner.query(`DROP INDEX "IDX_0879125534988579221ab087f5"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_esami_ambulatori" ("esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, CONSTRAINT "FK_0879125534988579221ab087f5f" FOREIGN KEY ("esameId") REFERENCES "esami" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_dca25925ac06aa9f147e2ddf95f" FOREIGN KEY ("ambulatorioId") REFERENCES "ambulatori" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_esami_ambulatori"("esameId", "ambulatorioId") SELECT "esameId", "ambulatorioId" FROM "esami_ambulatori"`,
    );
    await queryRunner.query(`DROP TABLE "esami_ambulatori"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_esami_ambulatori" RENAME TO "esami_ambulatori"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
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
      `CREATE INDEX "IDX_0879125534988579221ab087f5" ON "esami_ambulatori" ("esameId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dca25925ac06aa9f147e2ddf95" ON "esami_ambulatori" ("ambulatorioId") `,
    );
    await queryRunner.query(`DROP INDEX "IDX_0879125534988579221ab087f5"`);
    await queryRunner.query(`DROP INDEX "IDX_dca25925ac06aa9f147e2ddf95"`);
    await queryRunner.query(
      `ALTER TABLE "esami_ambulatori" RENAME TO "temporary_esami_ambulatori"`,
    );
    await queryRunner.query(
      `CREATE TABLE "esami_ambulatori" ("esameId" integer NOT NULL, "ambulatorioId" integer NOT NULL, CONSTRAINT "fk_esami_ambulatori_ambulatorio" FOREIGN KEY ("ambulatorioId") REFERENCES "ambulatori" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "fk_esami_ambulatori_esame" FOREIGN KEY ("esameId") REFERENCES "esami" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("esameId", "ambulatorioId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "esami_ambulatori"("esameId", "ambulatorioId") SELECT "esameId", "ambulatorioId" FROM "temporary_esami_ambulatori"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_esami_ambulatori"`);
    await queryRunner.query(
      `CREATE INDEX "IDX_0879125534988579221ab087f5" ON "esami_ambulatori" ("esameId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dca25925ac06aa9f147e2ddf95" ON "esami_ambulatori" ("ambulatorioId") `,
    );
  }
}
