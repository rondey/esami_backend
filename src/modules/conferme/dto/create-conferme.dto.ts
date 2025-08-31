import { IsNumber } from 'class-validator';

export class CreateConfermeDto {
  @IsNumber()
  esameId: number;

  @IsNumber()
  ambulatorioId: number;
}
