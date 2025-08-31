import { Controller, Get } from '@nestjs/common';
import { PredefinitiFiltriService } from './predefiniti-filtri.service';

@Controller('predefiniti-filtri')
export class PredefinitiFiltriController {
  constructor(
    private readonly predefinitiFiltriService: PredefinitiFiltriService,
  ) {}

  @Get()
  findAll() {
    return this.predefinitiFiltriService.findAll();
  }
}
