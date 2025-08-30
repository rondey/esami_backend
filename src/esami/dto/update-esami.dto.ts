import { PartialType } from '@nestjs/mapped-types';
import { CreateEsamiDto } from './create-esami.dto';

export class UpdateEsamiDto extends PartialType(CreateEsamiDto) {}
