import { Test, TestingModule } from '@nestjs/testing';
import { EsamiService } from './esami.service';

describe('EsamiService', () => {
  let service: EsamiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsamiService],
    }).compile();

    service = module.get<EsamiService>(EsamiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
