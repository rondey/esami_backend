import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosizioniService } from './posizioni.service';
import { CreatePosizioniDto } from './dto/create-posizioni.dto';
import { UpdatePosizioniDto } from './dto/update-posizioni.dto';

@Controller('posizioni')
export class PosizioniController {
  constructor(private readonly posizioniService: PosizioniService) {}

  @Post()
  create(@Body() createPosizioniDto: CreatePosizioniDto) {
    return this.posizioniService.create(createPosizioniDto);
  }

  @Get()
  findAll() {
    return this.posizioniService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posizioniService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosizioniDto: UpdatePosizioniDto) {
    return this.posizioniService.update(+id, updatePosizioniDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posizioniService.remove(+id);
  }
}
