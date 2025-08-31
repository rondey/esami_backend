import { Module } from '@nestjs/common';
import { ConfermeService } from './conferme.service';
import { ConfermeController } from './conferme.controller';
import { Conferma } from './entities/conferma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Conferma])],
  controllers: [ConfermeController],
  providers: [ConfermeService],
})
export class ConfermeModule {}
