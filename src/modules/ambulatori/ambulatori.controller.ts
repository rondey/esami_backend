import {
  Controller,
  Get,
  Query,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { AmbulatoriService } from './ambulatori.service';
import { FiltersEsamiDto } from 'src/modules/esami/dto/filter-esami.dto';
// import { CreateAmbulatoriDto } from './dto/create-ambulatori.dto';
// import { UpdateAmbulatoriDto } from './dto/update-ambulatori.dto';

@Controller('ambulatori')
export class AmbulatoriController {
  constructor(private readonly ambulatoriService: AmbulatoriService) {}

  // @Post()
  // create(@Body() createAmbulatoriDto: CreateAmbulatoriDto) {
  //   return this.ambulatoriService.create(createAmbulatoriDto);
  // }

  @Get()
  findAll(@Query() data: FiltersEsamiDto) {
    return this.ambulatoriService.findAll(data);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ambulatoriService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateAmbulatoriDto: UpdateAmbulatoriDto,
  // ) {
  //   return this.ambulatoriService.update(+id, updateAmbulatoriDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ambulatoriService.remove(+id);
  // }
}
