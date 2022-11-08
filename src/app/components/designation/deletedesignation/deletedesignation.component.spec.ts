import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedesignationComponent } from './deletedesignation.component';

describe('DeletedesignationComponent', () => {
  let component: DeletedesignationComponent;
  let fixture: ComponentFixture<DeletedesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
