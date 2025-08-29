import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: 'esamiDB',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
});

export default AppDataSource;
