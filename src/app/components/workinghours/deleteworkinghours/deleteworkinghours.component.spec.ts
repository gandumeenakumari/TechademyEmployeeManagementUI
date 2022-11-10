import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { DeleteworkinghoursComponent } from './deleteworkinghours.component';

describe('DeleteworkinghoursComponent', () => {
  let component: DeleteworkinghoursComponent;
  let fixture: ComponentFixture<DeleteworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

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
