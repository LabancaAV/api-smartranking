import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    JogadoresModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
