import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RequestleaveService } from './requestleave.service';

describe('RequestleaveService', () => {
  let service: RequestleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule],

    });
    service = TestBed.inject(RequestleaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
