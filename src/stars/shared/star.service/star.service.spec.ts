import { Test, TestingModule } from '@nestjs/testing';
import { StarService } from './star.service';

describe('StarService', () => {
  let provider: StarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarService],
    }).compile();

    provider = module.get<StarService>(StarService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
