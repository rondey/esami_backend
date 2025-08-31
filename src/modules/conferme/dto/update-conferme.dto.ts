import { PartialType } from '@nestjs/mapped-types';
import { CreateConfermeDto } from './create-conferme.dto';

export class UpdateConfermeDto extends PartialType(CreateConfermeDto) {}
