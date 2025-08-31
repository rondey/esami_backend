import { Module } from '@nestjs/common';
import { AmbulatoriService } from './ambulatori.service';
import { AmbulatoriController } from './ambulatori.controller';
import { Ambulatorio } from './entities/ambulatorio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ambulatorio])],
  controllers: [AmbulatoriController],
  providers: [AmbulatoriService],
})
export class AmbulatoriModule {}
