import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ConfermeService } from './conferme.service';
import { CreateConfermeDto } from './dto/create-conferme.dto';
import * as sortPipe from 'src/common/pipe/sort.pipe';
// import { UpdateConfermeDto } from './dto/update-conferme.dto';

@Controller('conferme')
export class ConfermeController {
  constructor(private readonly confermeService: ConfermeService) {}

  @Post()
  create(@Body() createConfermeDto: CreateConfermeDto) {
    return this.confermeService.create(createConfermeDto);
  }

  @Get()
  async findAll(
    @Query(
      new sortPipe.SortPipe({
        defaultSortBy: 'id',
        defaultSortOrder: 'ASC',
        allowedSortColumns: [
          'id',
          'esameAmbulatorio.esame.codiceMinisteriale',
          'esameAmbulatorio.esame.codiceInterno',
          'esameAmbulatorio.esame.descrizioneEsame',
          'esameAmbulatorio.esame.posizione.descrizionePosizione',
          'esameAmbulatorio.ambulatorio.descrizioneAmbulatorio',
          'createdAt',
        ],
      }),
    )
    sort: sortPipe.SortParams,
  ) {
    return this.confermeService.findAll(sort);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.confermeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateConfermeDto: UpdateConfermeDto) {
  //   return this.confermeService.update(+id, updateConfermeDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confermeService.remove(+id);
  }
}
