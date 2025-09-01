import { Injectable } from '@nestjs/common';
import { Predefiniti_Filtri } from 'src/config/ini-config';

@Injectable()
export class PredefinitiFiltriService {
  findAll() {
    return {
      campoDiFiltraggio: Predefiniti_Filtri.CampoDiFiltraggio,
      valoreDiFiltraggio: Predefiniti_Filtri.ValoreDiFiltraggio,

      ambulatorio: Predefiniti_Filtri.Ambulatorio,
      posizione: Predefiniti_Filtri.Posizione,
    };
  }
}
