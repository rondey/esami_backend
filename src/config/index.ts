import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: 'src/.env' });

const configTypeOrm: DataSourceOptions = {
  type: 'better-sqlite3',
  database: process.env.DATABASE_HOST || 'default.db',
  entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '../migrations/*{.ts,.js}')],
  synchronize: false,
  logging: true,
};

const configOverall = {
  ...configTypeOrm,
};

export default registerAs('config', () => configOverall);
export const connectionSource = new DataSource(configTypeOrm);
