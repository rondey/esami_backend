import { Test, TestingModule } from '@nestjs/testing';
import { AmbulatoriService } from './ambulatori.service';

describe('AmbulatoriService', () => {
  let service: AmbulatoriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbulatoriService],
    }).compile();

    service = module.get<AmbulatoriService>(AmbulatoriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
