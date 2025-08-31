import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FiltersEsamiDto } from 'src/esami/dto/filter-esami.dto';
import { Repository } from 'typeorm';
import { Ambulatorio } from './entities/ambulatorio.entity';
import { buildCommonFilters } from 'src/esami/helpers/filters';
// import { CreateAmbulatoriDto } from './dto/create-ambulatori.dto';
// import { UpdateAmbulatoriDto } from './dto/update-ambulatori.dto';

@Injectable()
export class AmbulatoriService {
  constructor(
    @InjectRepository(Ambulatorio)
    private ambulatoriRepository: Repository<Ambulatorio>,
  ) {}

  // create(createAmbulatoriDto: CreateAmbulatoriDto) {
  //   return 'This action adds a new ambulatori';
  // }

  findAll(data: FiltersEsamiDto) {
    return this.ambulatoriRepository.find({
      where: {
        esami: {
          ...buildCommonFilters(data),
        },
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} ambulatori`;
  // }

  // update(id: number, updateAmbulatoriDto: UpdateAmbulatoriDto) {
  //   return `This action updates a #${id} ambulatori`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ambulatori`;
  // }
}
