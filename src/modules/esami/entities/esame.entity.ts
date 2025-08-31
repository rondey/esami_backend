import { Posizione } from 'src/modules/posizioni/entities/posizione.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  // Index
} from 'typeorm';
import { EsameAmbulatorio } from './esame-ambulatorio.entity';

@Entity({ name: 'esami' })
export class Esame {
  @PrimaryGeneratedColumn()
  id: number;

  // This code is not unique. Some exams can have the same code (i.e.: ACIDO URICO URINE 24H and URATI CLEARANCE in https://www.policlinicocasilino.it/elenco-esami-di-laboratorio-regime-ssn/).
  @Column({
    length: 10,
    nullable: false,
  })
  // @Index()
  codiceMinisteriale: string;

  @Column({
    length: 10,
    nullable: false,
    unique: true,
  })
  // @Index()
  codiceInterno: string;

  @Column({
    length: 100,
    nullable: false,
  })
  descrizioneEsame: string;

  @ManyToOne(() => Posizione, (posizione) => posizione.esami, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  posizione: Posizione;

  @OneToMany(() => EsameAmbulatorio, (ea) => ea.esame)
  esamiAmbulatori: EsameAmbulatorio[];
}
