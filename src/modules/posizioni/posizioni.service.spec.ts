import { Test, TestingModule } from '@nestjs/testing';
import { PosizioniService } from './posizioni.service';

describe('PosizioniService', () => {
  let service: PosizioniService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosizioniService],
    }).compile();

    service = module.get<PosizioniService>(PosizioniService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
