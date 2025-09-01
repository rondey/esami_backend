import { Module } from '@nestjs/common';
import { PredefinitiFiltriService } from './predefiniti-filtri.service';
import { PredefinitiFiltriController } from './predefiniti-filtri.controller';

@Module({
  controllers: [PredefinitiFiltriController],
  providers: [PredefinitiFiltriService],
})
export class PredefinitiFiltriModule {}
