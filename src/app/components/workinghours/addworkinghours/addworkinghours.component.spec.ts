import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import { AddworkinghoursComponent } from './addworkinghours.component';

describe('AddworkinghoursComponent', () => {
  let component: AddworkinghoursComponent;
  let fixture: ComponentFixture<AddworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ AddworkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddworkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
