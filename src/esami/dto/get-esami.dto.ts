import { IsOptional, IsString } from 'class-validator';

export class GetEsamiDto {
  @IsString()
  @IsOptional()
  codiceMinisteriale: string = '';

  @IsString()
  @IsOptional()
  codiceInterno: string = '';

  @IsString()
  @IsOptional()
  descrizioneEsame: string = '';
}
