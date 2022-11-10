import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import { UpdateworkinghoursComponent } from './updateworkinghours.component';

describe('UpdateworkinghoursComponent', () => {
  let component: UpdateworkinghoursComponent;
  let fixture: ComponentFixture<UpdateworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ UpdateworkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateworkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
