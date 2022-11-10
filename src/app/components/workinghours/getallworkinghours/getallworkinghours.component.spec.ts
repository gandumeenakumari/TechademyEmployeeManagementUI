import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GetallworkinghoursComponent } from './getallworkinghours.component';

describe('GetallworkinghoursComponent', () => {
  let component: GetallworkinghoursComponent;
  let fixture: ComponentFixture<GetallworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

      declarations: [ GetallworkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallworkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
