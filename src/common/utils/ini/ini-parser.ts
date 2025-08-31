import { readFile } from 'node:fs/promises';

type IniValue = string | number | boolean;
type IniData = Record<string, Record<string, IniValue>>;

export async function parseIniStrict(file: string): Promise<IniData> {
  const text = await readFile(file, 'utf-8');
  const lines = text.split(/\r?\n/);

  let currentSection = '';
  const result: IniData = {};

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    if (!line || line.startsWith('#') || line.startsWith(';')) return;

    // [Section]
    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).trim();
      if (!result[currentSection]) result[currentSection] = {};
      return;
    }

    const eq = line.indexOf('=');
    if (eq === -1) {
      throw new Error(`Linea ${index + 1}: manca '=' → "${line}"`);
    }

    const key = line.slice(0, eq).trim();
    const valueRaw = line.slice(eq + 1).trim();

    let value: IniValue;

    // --- STRINGHE ---
    if (/^".*"$/.test(valueRaw)) {
      // rimuovo i doppi apici esterni
      value = valueRaw.slice(1, -1);
    }
    // --- NUMERI ---
    else if (/^-?\d+(\.\d+)?$/.test(valueRaw)) {
      value = Number(valueRaw);
    }
    // --- BOOLEAN ---
    else if (/^(true|false)$/.test(valueRaw)) {
      value = valueRaw === 'true';
    }
    // --- ERRORE ---
    else {
      throw new Error(
        `Linea ${index + 1}, sezione [${currentSection}], chiave "${key}": ` +
          `valore non valido → "${valueRaw}". ` +
          `Le stringhe devono essere tra doppi apici, numeri senza apici, boolean true/false.`,
      );
    }

    result[currentSection][key] = value;
  });

  return result;
}
