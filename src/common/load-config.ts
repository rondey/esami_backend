import * as configs from 'src/config/ini-config';
import { parseIniStrict } from './ini-parser';

type Configs = typeof configs;

export async function loadConfig(): Promise<void> {
  const ini = await parseIniStrict('config.ini');

  for (const key of Object.keys(configs) as (keyof Configs)[]) {
    const configObj = configs[key]; // mantiene il tipo reale

    const sectionName = key.replace(/^Predefiniti_/, '');
    const sectionValues = ini[sectionName];
    if (!sectionValues) continue;

    for (const prop of Object.keys(configObj) as (keyof typeof configObj)[]) {
      const value = sectionValues[prop as string];
      if (value === undefined) continue;

      const targetType = typeof configObj[prop];
      const valueType = typeof value;

      if (targetType !== valueType) {
        throw new Error(
          `Tipo non valido in sezione [${sectionName}], chiave "${String(
            prop,
          )}": atteso "${targetType}", trovato "${valueType}"`,
        );
      }

      configObj[prop] = value as (typeof configObj)[typeof prop];
    }
  }
}
