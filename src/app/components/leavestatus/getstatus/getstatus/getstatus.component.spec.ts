import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GetstatusComponent } from './getstatus.component';

describe('GetstatusComponent', () => {
  let component: GetstatusComponent;
  let fixture: ComponentFixture<GetstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

      declarations: [ GetstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
