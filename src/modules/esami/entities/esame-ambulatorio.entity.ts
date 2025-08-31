import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Esame } from 'src/modules/esami/entities/esame.entity';
import { Ambulatorio } from 'src/modules/ambulatori/entities/ambulatorio.entity';
// import { Conferma } from 'src/modules/conferme/entities/conferma.entity';

@Entity({ name: 'esami_ambulatori' })
export class EsameAmbulatorio {
  @PrimaryColumn()
  esameId: number;

  @PrimaryColumn()
  ambulatorioId: number;

  @ManyToOne(() => Esame, (esame) => esame.esamiAmbulatori, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  esame: Esame;

  @ManyToOne(() => Ambulatorio, (ambulatorio) => ambulatorio.esamiAmbulatori, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  ambulatorio: Ambulatorio;

  //   @ManyToOne(() => Conferma, (conferma) => conferma.esamiAmbulatori, {
  //     nullable: true,
  //     onDelete: 'RESTRICT',
  //     onUpdate: 'RESTRICT',
  //   })
  //   conferma: Conferma;
}
