import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateworkinghoursComponent } from './updateworkinghours.component';

describe('UpdateworkinghoursComponent', () => {
  let component: UpdateworkinghoursComponent;
  let fixture: ComponentFixture<UpdateworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
