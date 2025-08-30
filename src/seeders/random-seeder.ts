import { DataSource } from 'typeorm';
import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Ambulatorio } from 'src/ambulatori/entities/ambulatorio.entity';
import { Esame } from 'src/esami/entities/esame.entity';
import { Posizione } from 'src/posizioni/entities/posizione.entity';

export default class EsamiSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const posizioniRepo = dataSource.getRepository(Posizione);
    const ambulatoriRepo = dataSource.getRepository(Ambulatorio);
    const esamiRepo = dataSource.getRepository(Esame);

    // --- Posizioni ---
    const posizioniNomi = [
      'Testa',
      'Collo',
      'Torace',
      'Addome',
      'Arti superiori',
      'Arti inferiori',
      'Pelvi',
      'Colonna vertebrale',
      'Cuore',
      'Reni',
    ];
    const posizioniMap: Record<string, Posizione> = {};
    for (const nome of posizioniNomi) {
      const pos = posizioniRepo.create({ descrizionePosizione: nome });
      await posizioniRepo.save(pos);
      posizioniMap[nome] = pos;
    }

    // --- Stanze base ---
    const stanzeNomi = [
      'Radiologia',
      'Tac',
      'Risonanza',
      'Ecografia',
      'LaboratorioAnalisi',
      'Cardiologia',
      'Neurologia',
      'Urologia',
      'Endoscopia',
      'Ortopedia',
      'Dermatologia',
      'Gastroenterologia',
      'Oculistica',
      'Otorinolaringoiatria',
      'Pediatria',
      'Chirurgia',
      'Reumatologia',
    ];

    // --- Cognomi per nomi fittizi ---
    const cognomi = [
      'Rossi',
      'Bianchi',
      'Verdi',
      'Neri',
      'Gialli',
      'Bruni',
      'Esposito',
      'Russo',
      'Ferrari',
      'Romano',
    ];

    // --- Generazione ambulatori (CognomeStanza) ---
    const ambulatoriMap: Record<string, Ambulatorio> = {};
    for (const stanza of stanzeNomi) {
      const count = Math.floor(Math.random() * 3) + 1;
      const shuffledCognomi = cognomi.sort(() => 0.5 - Math.random());
      for (let i = 0; i < count; i++) {
        const nomeAmbulatorio = `${stanza}${shuffledCognomi[i]}`;
        const amb = ambulatoriRepo.create({
          descrizioneAmbulatorio: nomeAmbulatorio,
        });
        await ambulatoriRepo.save(amb);
        ambulatoriMap[nomeAmbulatorio] = amb;
      }
      // Aggiunge anche la stanza diretta
      if (!ambulatoriMap[stanza]) {
        const amb = ambulatoriRepo.create({ descrizioneAmbulatorio: stanza });
        await ambulatoriRepo.save(amb);
        ambulatoriMap[stanza] = amb;
      }
    }

    // --- Esami con ambulatori coerenti ---
    const esamiData = [
      {
        nome: 'RX mano Dx',
        posizione: 'Arti superiori',
        ambulatori: ['Radiologia'],
      },
      {
        nome: 'RX mano Sx',
        posizione: 'Arti superiori',
        ambulatori: ['Radiologia'],
      },
      { nome: 'RX torace', posizione: 'Torace', ambulatori: ['Radiologia'] },
      { nome: 'RMN cranio', posizione: 'Testa', ambulatori: ['Risonanza'] },
      {
        nome: 'RMN colonna lombare',
        posizione: 'Colonna vertebrale',
        ambulatori: ['Risonanza'],
      },
      { nome: 'Eco Addome', posizione: 'Addome', ambulatori: ['Ecografia'] },
      { nome: 'Eco Torace', posizione: 'Torace', ambulatori: ['Ecografia'] },
      {
        nome: 'Elettrocardiogramma',
        posizione: 'Cuore',
        ambulatori: ['Cardiologia'],
      },
      { nome: 'EEG', posizione: 'Testa', ambulatori: ['Neurologia'] },
      { nome: 'Uroflussometria', posizione: 'Reni', ambulatori: ['Urologia'] },
      { nome: 'Cistografia', posizione: 'Reni', ambulatori: ['Urologia'] },
      {
        nome: 'Endoscopia digestiva alta',
        posizione: 'Addome',
        ambulatori: ['Endoscopia'],
      },
      { nome: 'Colonscopia', posizione: 'Addome', ambulatori: ['Endoscopia'] },
      {
        nome: 'Visita cardiologica',
        posizione: 'Cuore',
        ambulatori: ['Cardiologia'],
      },
      {
        nome: 'Visita neurologica',
        posizione: 'Testa',
        ambulatori: ['Neurologia'],
      },
      {
        nome: 'Visita gastroenterologica',
        posizione: 'Addome',
        ambulatori: ['Gastroenterologia'],
      },
      {
        nome: 'Visita dermatologica',
        posizione: 'Arti superiori',
        ambulatori: ['Dermatologia'],
      },
      { nome: 'Visita urologica', posizione: 'Reni', ambulatori: ['Urologia'] },
      {
        nome: 'Visita ortopedica',
        posizione: 'Arti inferiori',
        ambulatori: ['Ortopedia'],
      },
      {
        nome: 'Visita pediatrica',
        posizione: 'Arti superiori',
        ambulatori: ['Pediatria'],
      },
      {
        nome: 'Visita oculistica',
        posizione: 'Testa',
        ambulatori: ['Oculistica'],
      },
      {
        nome: 'Visita otorinolaringoiatrica',
        posizione: 'Collo',
        ambulatori: ['Otorinolaringoiatria'],
      },
      {
        nome: 'Visita reumatologica',
        posizione: 'Arti inferiori',
        ambulatori: ['Reumatologia'],
      },
      {
        nome: 'Visita chirurgica',
        posizione: 'Torace',
        ambulatori: ['Chirurgia'],
      },
    ];

    const ministerialiMap: Record<string, string> = {
      RX: '90.01.2_0',
      RMN: '90.02.3_0',
      Eco: '90.03.4_0',
      Elettrocardiogramma: '90.04.5_0',
      EEG: '90.05.6_0',
      Angiografia: '90.06.7_0',
      Endoscopia: '90.07.8_0',
      Colonscopia: '90.08.9_0',
      Visita: '90.09.0_0',
      Uroflussometria: '90.10.1_0',
      Cistografia: '90.11.2_0',
      Ortopantomografia: '90.12.3_0',
    };

    let codiceInternoCounter = 1;

    for (const esameInfo of esamiData) {
      const prefix = esameInfo.nome.split(' ')[0];
      const ministeriale = ministerialiMap[prefix] || '99.99.9_0';

      // Assegnamento coerente ambulatori (stanza diretta o CognomeStanza)
      const assignedAmbulatori = esameInfo.ambulatori
        .map((stanza) => {
          const candidates = Object.keys(ambulatoriMap).filter((a) =>
            a.startsWith(stanza),
          );
          const shuffled = candidates.sort(() => 0.5 - Math.random());
          const count = Math.min(
            shuffled.length,
            Math.floor(Math.random() * 2) + 1,
          );
          return shuffled.slice(0, count).map((a) => ambulatoriMap[a]);
        })
        .flat();

      const esame = esamiRepo.create({
        codiceMinisteriale: ministeriale,
        codiceInterno: `INT${codiceInternoCounter.toString().padStart(4, '0')}`,
        descrizioneEsame: esameInfo.nome,
        posizione: posizioniMap[esameInfo.posizione],
        ambulatori: assignedAmbulatori,
      });

      codiceInternoCounter++;
      await esamiRepo.save(esame);
    }

    console.log(
      'Seeder completato: esami con ambulatori coerenti e CognomeStanza!',
    );
  }
}
