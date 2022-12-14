import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GetdesignationComponent } from './getdesignation.component';

describe('GetdesignationComponent', () => {
  let component: GetdesignationComponent;
  let fixture: ComponentFixture<GetdesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

      declarations: [ GetdesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
