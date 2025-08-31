import { Module } from '@nestjs/common';
import { PosizioniService } from './posizioni.service';
import { PosizioniController } from './posizioni.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posizione } from './entities/posizione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posizione])],
  controllers: [PosizioniController],
  providers: [PosizioniService],
})
export class PosizioniModule {}
