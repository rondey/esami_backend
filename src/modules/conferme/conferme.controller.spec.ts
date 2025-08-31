import { Test, TestingModule } from '@nestjs/testing';
import { ConfermeController } from './conferme.controller';
import { ConfermeService } from './conferme.service';

describe('ConfermeController', () => {
  let controller: ConfermeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfermeController],
      providers: [ConfermeService],
    }).compile();

    controller = module.get<ConfermeController>(ConfermeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
