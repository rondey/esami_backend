import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { EsameAmbulatorio } from 'src/modules/esami/entities/esame-ambulatorio.entity';

@Entity({ name: 'conferme' })
export class Conferma {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // It should be OneToOne, however this will end up to create another unique index (esameId, ambulatorioId). Because we want only one esame to be confirmed, we use ManyToOne that will not create another unique index.
  @ManyToOne(() => EsameAmbulatorio, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn([
    { name: 'esameId', referencedColumnName: 'esameId' },
    { name: 'ambulatorioId', referencedColumnName: 'ambulatorioId' },
  ])
  esameAmbulatorio: EsameAmbulatorio;

  // Only one esame can be confirmed. Hence, the foreign key esameId must be unique
  @Column({ unique: true })
  esameId: number;
}
