import { Module } from '@nestjs/common';
import { ConfermeService } from './conferme.service';
import { ConfermeController } from './conferme.controller';
import { Conferma } from './entities/conferma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EsameAmbulatorio } from '../esami/entities/esame-ambulatorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conferma, EsameAmbulatorio])],
  controllers: [ConfermeController],
  providers: [ConfermeService],
})
export class ConfermeModule {}
