import { Test, TestingModule } from '@nestjs/testing';
import { ConfermeService } from './conferme.service';

describe('ConfermeService', () => {
  let service: ConfermeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfermeService],
    }).compile();

    service = module.get<ConfermeService>(ConfermeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
