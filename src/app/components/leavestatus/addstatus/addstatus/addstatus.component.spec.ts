import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddstatusComponent } from './addstatus.component';

describe('AddstatusComponent', () => {
  let component: AddstatusComponent;
  let fixture: ComponentFixture<AddstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ AddstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
