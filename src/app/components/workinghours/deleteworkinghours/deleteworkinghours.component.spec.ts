import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteworkinghoursComponent } from './deleteworkinghours.component';

describe('DeleteworkinghoursComponent', () => {
  let component: DeleteworkinghoursComponent;
  let fixture: ComponentFixture<DeleteworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteworkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteworkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
