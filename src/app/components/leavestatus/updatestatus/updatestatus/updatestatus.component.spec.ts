import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdatestatusComponent } from './updatestatus.component';

describe('UpdatestatusComponent', () => {
  let component: UpdatestatusComponent;
  let fixture: ComponentFixture<UpdatestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule,FormsModule],

      declarations: [ UpdatestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
