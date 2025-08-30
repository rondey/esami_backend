import { Module } from '@nestjs/common';
import { EsamiService } from './esami.service';
import { EsamiController } from './esami.controller';

@Module({
  controllers: [EsamiController],
  providers: [EsamiService],
})
export class EsamiModule {}
