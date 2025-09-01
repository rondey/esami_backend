import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EsamiModule } from './modules/esami/esami.module';
import { PosizioniModule } from './modules/posizioni/posizioni.module';
import { AmbulatoriModule } from './modules/ambulatori/ambulatori.module';
import { ConfermeModule } from './modules/conferme/conferme.module';
import { PredefinitiFiltriModule } from './modules/predefiniti-filtri/predefiniti-filtri.module';

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
    ConfermeModule,
    PredefinitiFiltriModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
