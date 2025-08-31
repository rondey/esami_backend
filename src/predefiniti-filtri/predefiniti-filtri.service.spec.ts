import { Test, TestingModule } from '@nestjs/testing';
import { PredefinitiFiltriService } from './predefiniti-filtri.service';

describe('PredefinitiFiltriService', () => {
  let service: PredefinitiFiltriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredefinitiFiltriService],
    }).compile();

    service = module.get<PredefinitiFiltriService>(PredefinitiFiltriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
