import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DeletedesignationComponent } from './deletedesignation.component';

describe('DeletedesignationComponent', () => {
  let component: DeletedesignationComponent;
  let fixture: ComponentFixture<DeletedesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

      declarations: [ DeletedesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
