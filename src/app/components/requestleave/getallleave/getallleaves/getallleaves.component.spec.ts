import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { GetallleavesComponent } from './getallleaves.component';

describe('GetallleavesComponent', () => {
  let component: GetallleavesComponent;
  let fixture: ComponentFixture<GetallleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
       ],
      declarations: [ GetallleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
