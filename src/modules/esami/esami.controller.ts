import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EsamiService } from './esami.service';
import { GetEsamiDto } from './dto/get-esami.dto';
// import { CreateEsamiDto } from './dto/create-esami.dto';
// import { UpdateEsamiDto } from './dto/update-esami.dto';

@Controller('esami')
export class EsamiController {
  constructor(private readonly esamiService: EsamiService) {}

  // @Post()
  // create(@Body() createEsamiDto: CreateEsamiDto) {
  //   return this.esamiService.create(createEsamiDto);
  // }

  @Get()
  findAll(@Query(new ValidationPipe({ transform: true })) data: GetEsamiDto) {
    return this.esamiService.findAll(data);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.esamiService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEsamiDto: UpdateEsamiDto) {
  //   return this.esamiService.update(+id, updateEsamiDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.esamiService.remove(+id);
  // }
}
