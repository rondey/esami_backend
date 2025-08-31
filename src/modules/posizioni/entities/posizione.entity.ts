import { Esame } from 'src/modules/esami/entities/esame.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'posizioni' })
export class Posizione {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false,
    unique: true,
  })
  descrizionePosizione: string;

  @OneToMany(() => Esame, (esame) => esame.posizione)
  esami: Esame[];
}
