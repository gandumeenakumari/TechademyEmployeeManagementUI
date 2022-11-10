import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdateleaveComponent } from './updateleave.component';

describe('UpdateleaveComponent', () => {
  let component: UpdateleaveComponent;
  let fixture: ComponentFixture<UpdateleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
       ],
      declarations: [ UpdateleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
