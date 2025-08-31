import { Esame } from 'src/modules/esami/entities/esame.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToMany(() => Esame, (esame) => esame.ambulatori, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  // The JoinTable must be set only on one side of the relation. Ignored here because it's already set in Esame side of the relationship.
  esami: Esame[];
}
