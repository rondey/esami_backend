import { Test, TestingModule } from '@nestjs/testing';
import { PosizioniController } from './posizioni.controller';
import { PosizioniService } from './posizioni.service';

describe('PosizioniController', () => {
  let controller: PosizioniController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosizioniController],
      providers: [PosizioniService],
    }).compile();

    controller = module.get<PosizioniController>(PosizioniController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
