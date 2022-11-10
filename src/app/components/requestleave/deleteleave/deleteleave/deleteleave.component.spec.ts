import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DeleteleaveComponent } from './deleteleave.component';

describe('DeleteleaveComponent', () => {
  let component: DeleteleaveComponent;
  let fixture: ComponentFixture<DeleteleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,RouterTestingModule],

      declarations: [ DeleteleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
