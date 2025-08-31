import { Injectable } from '@nestjs/common';
import { GetEsamiDto } from './dto/get-esami.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Esame } from './entities/esame.entity';
import { Repository } from 'typeorm';
import { buildCommonFilters } from './helpers/filters';
// import { CreateEsamiDto } from './dto/create-esami.dto';
// import { UpdateEsamiDto } from './dto/update-esami.dto';

@Injectable()
export class EsamiService {
  constructor(
    @InjectRepository(Esame)
    private esamiRepository: Repository<Esame>,
  ) {}

  // create(createEsamiDto: CreateEsamiDto) {
  //   return 'This action adds a new esami';
  // }

  findAll(data: GetEsamiDto) {
    return this.esamiRepository.find({
      where: {
        ...buildCommonFilters(data),
        esamiAmbulatori: {
          ambulatorio: {
            id: data.ambulatorioId,
          },
        },
        posizione: {
          id: data.posizioneId,
        },
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} esami`;
  // }

  // update(id: number, updateEsamiDto: UpdateEsamiDto) {
  //   return `This action updates a #${id} esami`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} esami`;
  // }
}
