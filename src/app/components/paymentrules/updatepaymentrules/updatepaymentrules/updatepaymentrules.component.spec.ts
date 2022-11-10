import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdatepaymentrulesComponent } from './updatepaymentrules.component';

describe('UpdatepaymentrulesComponent', () => {
  let component: UpdatepaymentrulesComponent;
  let fixture: ComponentFixture<UpdatepaymentrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ UpdatepaymentrulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepaymentrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
