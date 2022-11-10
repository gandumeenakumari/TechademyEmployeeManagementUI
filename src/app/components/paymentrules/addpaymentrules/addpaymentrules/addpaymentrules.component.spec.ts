import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddpaymentrulesComponent } from './addpaymentrules.component';

describe('AddpaymentrulesComponent', () => {
  let component: AddpaymentrulesComponent;
  let fixture: ComponentFixture<AddpaymentrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ AddpaymentrulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpaymentrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
