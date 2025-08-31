import { IntersectionType } from '@nestjs/mapped-types';
import { IsNumberString } from 'class-validator';
import { FiltersEsamiDto } from 'src/esami/dto/filter-esami.dto';

class SelectedPosizioniParentsDto {
  @IsNumberString()
  ambulatorioId: number;
}

export class GetPosizioniDto extends IntersectionType(
  SelectedPosizioniParentsDto,
  FiltersEsamiDto,
) {}
