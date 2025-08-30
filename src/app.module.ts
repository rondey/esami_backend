import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EsamiModule } from './esami/esami.module';
import { PosizioniModule } from './posizioni/posizioni.module';
import { AmbulatoriModule } from './ambulatori/ambulatori.module';

import typeorm from './config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('config')!,
    }),
    EsamiModule,
    PosizioniModule,
    AmbulatoriModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
