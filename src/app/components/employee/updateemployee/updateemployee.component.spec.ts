import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdateemployeeComponent } from './updateemployee.component';

describe('UpdateemployeeComponent', () => {
  let component: UpdateemployeeComponent;
  let fixture: ComponentFixture<UpdateemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ UpdateemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
