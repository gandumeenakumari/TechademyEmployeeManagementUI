import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Workinghours } from '../models/workinghours.model';

import { WorkinghoursService } from './workinghours.service';

describe('WorkinghoursService', () => {
  let service: WorkinghoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule],

    });
    service = TestBed.inject(WorkinghoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   let request : Workinghours ={
     id: 0,
     employeeID: 0,
     companyWokingHours: 0,
     employeeWorkingHours: 0
   }
   it('checking add',() =>
   {
      expect(service.addWorkingHours(request)).toBeTruthy();
   });
   it('checking update',() =>
   {
      expect(service.updateWorkingHours(5,request)).toBeTruthy();
   });
   it('checking get',() =>
   {
      expect(service.getWorkingHour.length).toEqual(1);
   });
});
