import { Module } from '@nestjs/common';
import { PosizioniService } from './posizioni.service';
import { PosizioniController } from './posizioni.controller';

@Module({
  controllers: [PosizioniController],
  providers: [PosizioniService],
})
export class PosizioniModule {}
