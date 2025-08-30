import { Test, TestingModule } from '@nestjs/testing';
import { AmbulatoriController } from './ambulatori.controller';
import { AmbulatoriService } from './ambulatori.service';

describe('AmbulatoriController', () => {
  let controller: AmbulatoriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmbulatoriController],
      providers: [AmbulatoriService],
    }).compile();

    controller = module.get<AmbulatoriController>(AmbulatoriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
