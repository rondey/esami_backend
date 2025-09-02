import { Injectable } from '@nestjs/common';
import { Predefiniti_Filtri } from 'src/config/ini-config';

@Injectable()
export class PredefinitiFiltriService {
  findAll() {
    return {
      campoDiFiltraggio: Predefiniti_Filtri.CampoDiFiltraggio,
      valoreDiFiltraggio: Predefiniti_Filtri.ValoreDiFiltraggio,

      ambulatorioId: Predefiniti_Filtri.Ambulatorio,
      posizioneId: Predefiniti_Filtri.Posizione,
      esameId: Predefiniti_Filtri.Esame,
    };
  }
}
