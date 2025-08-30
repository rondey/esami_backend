import { Injectable } from '@nestjs/common';
import { GetEsamiDto } from './dto/get-esami.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Esame } from './entities/esame.entity';
import { ILike, Repository } from 'typeorm';
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
        codiceMinisteriale: ILike(`%${data.codiceMinisteriale}%`),
        codiceInterno: ILike(`%${data.codiceInterno}%`),
        descrizioneEsame: ILike(`%${data.descrizioneEsame}%`),
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
