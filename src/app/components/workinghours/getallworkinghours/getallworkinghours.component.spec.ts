import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallworkinghoursComponent } from './getallworkinghours.component';

describe('GetallworkinghoursComponent', () => {
  let component: GetallworkinghoursComponent;
  let fixture: ComponentFixture<GetallworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     
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
