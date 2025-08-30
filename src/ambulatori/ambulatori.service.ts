import { Injectable } from '@nestjs/common';
import { CreateAmbulatoriDto } from './dto/create-ambulatori.dto';
import { UpdateAmbulatoriDto } from './dto/update-ambulatori.dto';

@Injectable()
export class AmbulatoriService {
  create(createAmbulatoriDto: CreateAmbulatoriDto) {
    return 'This action adds a new ambulatori';
  }

  findAll() {
    return `This action returns all ambulatori`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ambulatori`;
  }

  update(id: number, updateAmbulatoriDto: UpdateAmbulatoriDto) {
    return `This action updates a #${id} ambulatori`;
  }

  remove(id: number) {
    return `This action removes a #${id} ambulatori`;
  }
}
