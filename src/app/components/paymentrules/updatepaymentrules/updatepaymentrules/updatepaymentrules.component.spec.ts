import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepaymentrulesComponent } from './updatepaymentrules.component';

describe('UpdatepaymentrulesComponent', () => {
  let component: UpdatepaymentrulesComponent;
  let fixture: ComponentFixture<UpdatepaymentrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
