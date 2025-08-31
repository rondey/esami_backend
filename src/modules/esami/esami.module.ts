import { Module } from '@nestjs/common';
import { EsamiService } from './esami.service';
import { EsamiController } from './esami.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Esame } from './entities/esame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Esame])],
  controllers: [EsamiController],
  providers: [EsamiService],
})
export class EsamiModule {}
