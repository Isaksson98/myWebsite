import { TestBed } from '@angular/core/testing';

import { NeuralNetModelsService } from './neural-net-models.service';

describe('NeuralNetModelsService', () => {
  let service: NeuralNetModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeuralNetModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
