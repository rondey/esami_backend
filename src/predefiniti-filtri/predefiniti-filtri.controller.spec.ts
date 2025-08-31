import { Test, TestingModule } from '@nestjs/testing';
import { PredefinitiFiltriController } from './predefiniti-filtri.controller';
import { PredefinitiFiltriService } from './predefiniti-filtri.service';

describe('PredefinitiFiltriController', () => {
  let controller: PredefinitiFiltriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PredefinitiFiltriController],
      providers: [PredefinitiFiltriService],
    }).compile();

    controller = module.get<PredefinitiFiltriController>(PredefinitiFiltriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
