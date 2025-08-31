import { PartialType } from '@nestjs/mapped-types';
import { CreateAmbulatoriDto } from './create-ambulatori.dto';

export class UpdateAmbulatoriDto extends PartialType(CreateAmbulatoriDto) {}
