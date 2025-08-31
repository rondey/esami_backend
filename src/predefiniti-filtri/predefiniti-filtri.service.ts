import { Injectable } from '@nestjs/common';
import { Predefiniti_Filtri } from 'src/config/ini-config';

@Injectable()
export class PredefinitiFiltriService {
  findAll() {
    return {
      codiceMinisteriale: Predefiniti_Filtri.CodiceMinisteriale,
      codiceInterno: Predefiniti_Filtri.CodiceInterno,
      descrizioneEsame: Predefiniti_Filtri.DescrizioneEsame,

      ambulatorio: Predefiniti_Filtri.Ambulatorio,
      posizione: Predefiniti_Filtri.Posizione,
    };
  }
}
