import { IntersectionType } from '@nestjs/mapped-types';
import { IsNumberString } from 'class-validator';
import { SelectedPosizioniParentsDto } from 'src/posizioni/dto/get-posizioni.dto';
import { FiltersEsamiDto } from 'src/esami/dto/filter-esami.dto';

class SelectedEsamiParentsDto {
  @IsNumberString()
  posizioneId: number;
}

export class GetEsamiDto extends IntersectionType(
  SelectedEsamiParentsDto,
  SelectedPosizioniParentsDto,
  FiltersEsamiDto,
) {}
