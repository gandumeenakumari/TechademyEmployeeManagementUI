import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdatedesignationComponent } from './updatedesignation.component';

describe('UpdatedesignationComponent', () => {
  let component: UpdatedesignationComponent;
  let fixture: ComponentFixture<UpdatedesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule, FormsModule],

      declarations: [ UpdatedesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('checking ',()=>
  {
    expect(component.deleteDesignation(5)).not.toBeFalse();
  })
});
