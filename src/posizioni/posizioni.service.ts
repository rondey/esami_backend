import { Injectable } from '@nestjs/common';
import { CreatePosizioniDto } from './dto/create-posizioni.dto';
import { UpdatePosizioniDto } from './dto/update-posizioni.dto';

@Injectable()
export class PosizioniService {
  create(createPosizioniDto: CreatePosizioniDto) {
    return 'This action adds a new posizioni';
  }

  findAll() {
    return `This action returns all posizioni`;
  }

  findOne(id: number) {
    return `This action returns a #${id} posizioni`;
  }

  update(id: number, updatePosizioniDto: UpdatePosizioniDto) {
    return `This action updates a #${id} posizioni`;
  }

  remove(id: number) {
    return `This action removes a #${id} posizioni`;
  }
}
