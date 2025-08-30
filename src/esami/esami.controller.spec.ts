import { Test, TestingModule } from '@nestjs/testing';
import { EsamiController } from './esami.controller';
import { EsamiService } from './esami.service';

describe('EsamiController', () => {
  let controller: EsamiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsamiController],
      providers: [EsamiService],
    }).compile();

    controller = module.get<EsamiController>(EsamiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
