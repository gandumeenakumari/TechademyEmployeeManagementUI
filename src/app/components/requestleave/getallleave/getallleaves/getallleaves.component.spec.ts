import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallleavesComponent } from './getallleaves.component';

describe('GetallleavesComponent', () => {
  let component: GetallleavesComponent;
  let fixture: ComponentFixture<GetallleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
