import { IntersectionType } from '@nestjs/mapped-types';
import { IsNumberString } from 'class-validator';
import { FiltersEsamiDto } from 'src/modules/esami/dto/filter-esami.dto';

export class SelectedPosizioniParentsDto {
  @IsNumberString()
  ambulatorioId: number;
}

export class GetPosizioniDto extends IntersectionType(
  SelectedPosizioniParentsDto,
  FiltersEsamiDto,
) {}
