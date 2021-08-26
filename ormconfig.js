module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'labrancax',
  password: 'pass123',
  database: 'smartranking',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
