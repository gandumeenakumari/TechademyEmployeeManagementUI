import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GetemployeebyidComponent } from './getemployeebyid.component';

describe('GetemployeebyidComponent', () => {
  let component: GetemployeebyidComponent;
  let fixture: ComponentFixture<GetemployeebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

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
