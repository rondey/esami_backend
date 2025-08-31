import { EsameAmbulatorio } from 'src/modules/esami/entities/esame-ambulatorio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ambulatori' })
export class Ambulatorio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false,
    unique: true,
  })
  descrizioneAmbulatorio: string;

  @OneToMany(() => EsameAmbulatorio, (ea) => ea.ambulatorio)
  esamiAmbulatori: EsameAmbulatorio[];
}
