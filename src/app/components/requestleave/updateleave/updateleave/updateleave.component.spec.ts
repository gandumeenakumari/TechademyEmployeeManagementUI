import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateleaveComponent } from './updateleave.component';

describe('UpdateleaveComponent', () => {
  let component: UpdateleaveComponent;
  let fixture: ComponentFixture<UpdateleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
