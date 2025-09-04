import { DataSource } from 'typeorm';
import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Esame } from 'src/modules/esami/entities/esame.entity';
import { Posizione } from 'src/modules/posizioni/entities/posizione.entity';
import { Ambulatorio } from 'src/modules/ambulatori/entities/ambulatorio.entity';

export default class EsamiSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const esameRepo = dataSource.getRepository(Esame);
    const posizioneRepo = dataSource.getRepository(Posizione);
    const ambulatorioRepo = dataSource.getRepository(Ambulatorio);
    const esameAmbulatorioRepo = dataSource.getRepository('EsameAmbulatorio');

    /** ====================
     *  POSIZIONI CORPO
     * ==================== */
    const posizioniNomi = [
      'Cranio',
      'Cervello',
      'Torace',
      'Polmone',
      'Cuore',
      'Addome',
      'Fegato',
      'Rene',
      'Vescica',
      'Colonna vertebrale',
      'Ginocchio',
      'Spalla',
      'Mano',
      'Piede',
      'Occhio',
      'Orecchio',
      'Gola',
      'Intestino',
      'Stomaco',
      'Prostata',
    ];
    const posizioni = await posizioneRepo.save(
      posizioniNomi.map((p) =>
        posizioneRepo.create({ descrizionePosizione: p }),
      ),
    );

    /** ====================
     *  STANZE BASE
     * ==================== */
    const stanzeBase = [
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

    /** ====================
     *  NOMI COGNOME AMBULATORI
     * ==================== */
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
      'Costa',
      'Greco',
      'Marino',
      'Conti',
      'De Luca',
      'Fontana',
      'Barbieri',
      'Santoro',
      'Rinaldi',
      'Moretti',
    ];

    const ambulatori: Ambulatorio[] = [];
    const usati = new Set<string>(); // 👈 qui salviamo i nomi già creati

    for (const stanza of stanzeBase) {
      // Aggiungiamo sempre l’ambulatorio “puro”
      if (!usati.has(stanza)) {
        ambulatori.push(
          ambulatorioRepo.create({ descrizioneAmbulatorio: stanza }),
        );
        usati.add(stanza);
      }

      // Generiamo 2 varianti con cognome casuale
      for (let i = 0; i < 2; i++) {
        let nome: string;
        do {
          const cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
          nome = `${cognome}${stanza}`;
        } while (usati.has(nome)); // 👈 garantisce unicità

        ambulatori.push(
          ambulatorioRepo.create({ descrizioneAmbulatorio: nome }),
        );
        usati.add(nome);
      }
    }

    await ambulatorioRepo.save(ambulatori);

    /** ====================
     *  ESAMI
     * ==================== */
    const esamiData = [
      { descrizione: 'RX mano dx', posizione: 'Mano', stanze: ['Radiologia'] },
      { descrizione: 'RX mano sx', posizione: 'Mano', stanze: ['Radiologia'] },
      { descrizione: 'RX torace', posizione: 'Torace', stanze: ['Radiologia'] },
      {
        descrizione: 'RX ginocchio dx',
        posizione: 'Ginocchio',
        stanze: ['Radiologia'],
      },
      {
        descrizione: 'RX ginocchio sx',
        posizione: 'Ginocchio',
        stanze: ['Radiologia'],
      },
      {
        descrizione: 'RX spalla dx',
        posizione: 'Spalla',
        stanze: ['Radiologia'],
      },
      {
        descrizione: 'RX spalla sx',
        posizione: 'Spalla',
        stanze: ['Radiologia'],
      },
      { descrizione: 'TAC cranio', posizione: 'Cranio', stanze: ['Tac'] },
      { descrizione: 'TAC addome', posizione: 'Addome', stanze: ['Tac'] },
      { descrizione: 'TAC torace', posizione: 'Torace', stanze: ['Tac'] },
      {
        descrizione: 'TAC colonna vertebrale',
        posizione: 'Colonna vertebrale',
        stanze: ['Tac'],
      },
      {
        descrizione: 'RMN cranio',
        posizione: 'Cervello',
        stanze: ['Risonanza'],
      },
      {
        descrizione: 'RMN ginocchio dx',
        posizione: 'Ginocchio',
        stanze: ['Risonanza'],
      },
      {
        descrizione: 'RMN ginocchio sx',
        posizione: 'Ginocchio',
        stanze: ['Risonanza'],
      },
      {
        descrizione: 'RMN spalla dx',
        posizione: 'Spalla',
        stanze: ['Risonanza'],
      },
      {
        descrizione: 'RMN spalla sx',
        posizione: 'Spalla',
        stanze: ['Risonanza'],
      },
      {
        descrizione: 'RMN colonna vertebrale',
        posizione: 'Colonna vertebrale',
        stanze: ['Risonanza'],
      },
      {
        descrizione: 'Ecografia addome completo',
        posizione: 'Addome',
        stanze: ['Ecografia'],
      },
      {
        descrizione: 'Ecografia fegato',
        posizione: 'Fegato',
        stanze: ['Ecografia'],
      },
      {
        descrizione: 'Ecografia rene dx',
        posizione: 'Rene',
        stanze: ['Ecografia'],
      },
      {
        descrizione: 'Ecografia rene sx',
        posizione: 'Rene',
        stanze: ['Ecografia'],
      },
      {
        descrizione: 'Ecografia vescica',
        posizione: 'Vescica',
        stanze: ['Ecografia'],
      },
      {
        descrizione: 'Elettrocardiogramma (ECG)',
        posizione: 'Cuore',
        stanze: ['Cardiologia'],
      },
      {
        descrizione: 'Ecocardiogramma',
        posizione: 'Cuore',
        stanze: ['Cardiologia'],
      },
      {
        descrizione: 'Elettroencefalogramma (EEG)',
        posizione: 'Cervello',
        stanze: ['Neurologia'],
      },
      {
        descrizione: 'Esame urodinamico',
        posizione: 'Vescica',
        stanze: ['Urologia'],
      },
      {
        descrizione: 'Uroflussometria',
        posizione: 'Vescica',
        stanze: ['Urologia'],
      },
      {
        descrizione: 'Gastroscopia',
        posizione: 'Stomaco',
        stanze: ['Endoscopia'],
      },
      {
        descrizione: 'Colonscopia',
        posizione: 'Intestino',
        stanze: ['Endoscopia'],
      },
      {
        descrizione: 'Artroscopia ginocchio dx',
        posizione: 'Ginocchio',
        stanze: ['Ortopedia'],
      },
      {
        descrizione: 'Artroscopia ginocchio sx',
        posizione: 'Ginocchio',
        stanze: ['Ortopedia'],
      },
      {
        descrizione: 'Biopsia cutanea',
        posizione: 'Pelle',
        stanze: ['Dermatologia'],
      },
      {
        descrizione: 'Esame sangue emocromo',
        posizione: 'Addome',
        stanze: ['LaboratorioAnalisi'],
      },
      {
        descrizione: 'Esame urine completo',
        posizione: 'Vescica',
        stanze: ['LaboratorioAnalisi'],
      },
      {
        descrizione: 'Fundus oculi',
        posizione: 'Occhio',
        stanze: ['Oculistica'],
      },
      {
        descrizione: 'Campo visivo',
        posizione: 'Occhio',
        stanze: ['Oculistica'],
      },
      {
        descrizione: 'Audiometria',
        posizione: 'Orecchio',
        stanze: ['Otorinolaringoiatria'],
      },
      {
        descrizione: 'Visita pediatrica generale',
        posizione: 'Torace',
        stanze: ['Pediatria'],
      },
      {
        descrizione: 'Visita chirurgica',
        posizione: 'Addome',
        stanze: ['Chirurgia'],
      },
      {
        descrizione: 'Visita reumatologica',
        posizione: 'Articolazioni',
        stanze: ['Reumatologia'],
      },
    ];

    /** ====================
     *  CREAZIONE ESAMI + LEGAMI
     * ==================== */
    for (const [i, e] of esamiData.entries()) {
      const posizione = posizioni.find(
        (p) => p.descrizionePosizione === e.posizione,
      );
      if (!posizione) continue;

      const esame = await esameRepo.save(
        esameRepo.create({
          codiceMinisteriale: `90.${String(i + 1).padStart(2, '0')}.0_${i}`,
          codiceInterno: `INT${i + 1}`,
          descrizioneEsame: e.descrizione,
          posizione,
        }),
      );

      // ambulatori coerenti
      const stanzeCoerenti = ambulatori.filter((a) =>
        e.stanze.some((stanza) => a.descrizioneAmbulatorio.includes(stanza)),
      );

      // aggiungi un extra random con cognome, se disponibile
      const extra = ambulatori.filter(
        (a) =>
          /^[A-Z][a-z]+/.test(a.descrizioneAmbulatorio) &&
          e.stanze.some((stanza) => a.descrizioneAmbulatorio.endsWith(stanza)),
      );
      if (extra.length > 0) {
        stanzeCoerenti.push(extra[Math.floor(Math.random() * extra.length)]);
      }

      // crea le entry nella tabella pivot
      for (const ambulatorio of stanzeCoerenti) {
        // With random probability of 1/3, skip this esameAmbulatorio
        const probability = Math.floor(Math.random() * 3);
        if (probability > 0) continue;
        await esameAmbulatorioRepo.save(
          esameAmbulatorioRepo.create({
            esame,
            ambulatorio,
          }),
        );
      }
    }
  }
}
