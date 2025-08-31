import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConfermeService } from './conferme.service';
import { CreateConfermeDto } from './dto/create-conferme.dto';
// import { UpdateConfermeDto } from './dto/update-conferme.dto';

@Controller('conferme')
export class ConfermeController {
  constructor(private readonly confermeService: ConfermeService) {}

  @Post()
  create(@Body() createConfermeDto: CreateConfermeDto) {
    return this.confermeService.create(createConfermeDto);
  }

  @Get()
  findAll() {
    return this.confermeService.findAll();
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
