import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddleaveComponent } from './addleave.component';

describe('AddleaveComponent', () => {
  let component: AddleaveComponent;
  let fixture: ComponentFixture<AddleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ AddleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
