import { TestBed } from '@angular/core/testing';

import { PaymentrulesService } from './paymentrules.service';

describe('PaymentrulesService', () => {
  let service: PaymentrulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentrulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
