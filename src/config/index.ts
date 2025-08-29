import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: 'src/.env' });

const configTypeOrm = {
  type: 'better-sqlite3',
  database: process.env.DATABASE_HOST,
  entities: [__dirname + '../src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '../migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
};

const configOverall = {
  ...configTypeOrm,
};

export default registerAs('config', () => configOverall);
export const connectionSource = new DataSource(
  configTypeOrm as DataSourceOptions,
);
