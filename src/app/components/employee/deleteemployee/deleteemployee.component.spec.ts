import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DeleteemployeeComponent } from './deleteemployee.component';

describe('DeleteemployeeComponent', () => {
  let component: DeleteemployeeComponent;
  let fixture: ComponentFixture<DeleteemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

      declarations: [ DeleteemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
