import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateConfermeDto } from './dto/create-conferme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conferma } from './entities/conferma.entity';
import { Repository } from 'typeorm';
import { SortParams } from 'src/common/pipe/sort.pipe';
// import { UpdateConfermeDto } from './dto/update-conferme.dto';

@Injectable()
export class ConfermeService {
  constructor(
    @InjectRepository(Conferma)
    private confermeRepository: Repository<Conferma>,
  ) {}

  async create(createConfermeDto: CreateConfermeDto) {
    const conferma = await this.confermeRepository.findOneBy({
      esameAmbulatorio: createConfermeDto,
    });
    if (conferma)
      throw new HttpException('Conferma già esistente', HttpStatus.BAD_REQUEST);
    return this.confermeRepository.save(
      this.confermeRepository.create({
        esameAmbulatorio: createConfermeDto,
      }),
    );
  }

  findAll({ sortBy, sortOrder }: SortParams) {
    return this.confermeRepository.find({
      relations: {
        esameAmbulatorio: {
          esame: {
            posizione: true,
          },
          ambulatorio: true,
        },
      },
      order: {
        [sortBy]: sortOrder,
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} conferme`;
  // }

  // update(id: number, updateConfermeDto: UpdateConfermeDto) {
  //   return `This action updates a #${id} conferme`;
  // }

  remove(id: number) {
    return this.confermeRepository.delete(id);
  }
}
