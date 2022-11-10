import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';


import { PaymentrulesService } from './paymentrules.service';

describe('PaymentrulesService', () => {
  let service: PaymentrulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule],

     });
    service = TestBed.inject(PaymentrulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
