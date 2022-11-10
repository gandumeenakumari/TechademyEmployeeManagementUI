import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PaymentrulesComponent } from './paymentrules.component';

describe('PaymentrulesComponent', () => {
  let component: PaymentrulesComponent;
  let fixture: ComponentFixture<PaymentrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

      declarations: [ PaymentrulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
