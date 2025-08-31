import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posizione } from './entities/posizione.entity';
import { Repository } from 'typeorm';
import { GetPosizioniDto } from './dto/get-posizioni.dto';
import { buildCommonFilters } from 'src/esami/helpers/filters';
// import { CreatePosizioniDto } from './dto/create-posizioni.dto';
// import { UpdatePosizioniDto } from './dto/update-posizioni.dto';

@Injectable()
export class PosizioniService {
  constructor(
    @InjectRepository(Posizione)
    private posizioniRepository: Repository<Posizione>,
  ) {}

  // create(createPosizioniDto: CreatePosizioniDto) {
  //   return 'This action adds a new posizioni';
  // }

  findAll(data: GetPosizioniDto) {
    return this.posizioniRepository.find({
      where: {
        esami: {
          ...buildCommonFilters(data),
          ambulatori: {
            id: data.ambulatorioId,
          },
        },
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} posizioni`;
  // }

  // update(id: number, updatePosizioniDto: UpdatePosizioniDto) {
  //   return `This action updates a #${id} posizioni`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} posizioni`;
  // }
}
