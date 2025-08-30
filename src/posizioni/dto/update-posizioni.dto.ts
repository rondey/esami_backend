import { PartialType } from '@nestjs/mapped-types';
import { CreatePosizioniDto } from './create-posizioni.dto';

export class UpdatePosizioniDto extends PartialType(CreatePosizioniDto) {}
