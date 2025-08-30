import { Injectable } from '@nestjs/common';
import { CreateEsamiDto } from './dto/create-esami.dto';
import { UpdateEsamiDto } from './dto/update-esami.dto';

@Injectable()
export class EsamiService {
  create(createEsamiDto: CreateEsamiDto) {
    return 'This action adds a new esami';
  }

  findAll() {
    return `This action returns all esami`;
  }

  findOne(id: number) {
    return `This action returns a #${id} esami`;
  }

  update(id: number, updateEsamiDto: UpdateEsamiDto) {
    return `This action updates a #${id} esami`;
  }

  remove(id: number) {
    return `This action removes a #${id} esami`;
  }
}
