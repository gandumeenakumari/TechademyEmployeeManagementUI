import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetemployeebyidComponent } from './getemployeebyid.component';

describe('GetemployeebyidComponent', () => {
  let component: GetemployeebyidComponent;
  let fixture: ComponentFixture<GetemployeebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetemployeebyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetemployeebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
