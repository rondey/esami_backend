import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FiltersEsamiDto } from 'src/modules/esami/dto/filter-esami.dto';
import { Not, IsNull, Repository } from 'typeorm';
import { Ambulatorio } from './entities/ambulatorio.entity';
import { buildCommonFilters } from 'src/modules/esami/helpers/filters';
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
        esamiAmbulatori: {
          // This is a trick to ensure that each ambulatorio has at least one esame: enforces TypeORM to make a left join with esamiAmbulatori, then gets for each row the ambulatorio with the esameId present
          esameId: Not(IsNull()),
          esame: {
            ...buildCommonFilters(data),
          },
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
