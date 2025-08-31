import { FindOptionsWhere, ILike } from 'typeorm';
import { FiltersEsamiDto } from '../dto/filter-esami.dto';
import { Esame } from '../entities/esame.entity';

export function buildCommonFilters(data: FiltersEsamiDto) {
  const where: FindOptionsWhere<Esame> = {};

  if (data.codiceMinisteriale) {
    where.codiceMinisteriale = ILike(`%${data.codiceMinisteriale}%`);
  }

  if (data.codiceInterno) {
    where.codiceInterno = ILike(`%${data.codiceInterno}%`);
  }

  if (data.descrizioneEsame) {
    where.descrizioneEsame = ILike(`%${data.descrizioneEsame}%`);
  }

  return where;
}
