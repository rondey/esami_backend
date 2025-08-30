import { Module } from '@nestjs/common';
import { AmbulatoriService } from './ambulatori.service';
import { AmbulatoriController } from './ambulatori.controller';

@Module({
  controllers: [AmbulatoriController],
  providers: [AmbulatoriService],
})
export class AmbulatoriModule {}
