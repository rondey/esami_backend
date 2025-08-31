import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { EsameAmbulatorio } from 'src/modules/esami/entities/esame-ambulatorio.entity';

@Entity({ name: 'conferme' })
export class Conferma {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToOne(() => EsameAmbulatorio, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn([
    { name: 'esameId', referencedColumnName: 'esameId' },
    { name: 'ambulatorioId', referencedColumnName: 'ambulatorioId' },
  ])
  esameAmbulatorio: EsameAmbulatorio;
}
