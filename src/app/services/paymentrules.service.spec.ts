import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PaymentRules } from '../models/paymentrules.model';


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
  let request: PaymentRules ={
    paymentID: 3,
    paymentRule: 'meena kumari'
  }
  it('checking ',() =>
  {
    expect(service.getPaymentRules.length).toBeLessThanOrEqual(1);
  })
});
