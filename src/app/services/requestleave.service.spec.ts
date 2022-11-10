import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RequestLeave } from '../models/requestleave.model';

import { RequestleaveService } from './requestleave.service';

describe('RequestleaveService', () => {
  let service: RequestleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule],

    });
    service = TestBed.inject(RequestleaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   let request : RequestLeave ={
     id: 0,
     leaveType: '',
     when: new Date(),
     leaveReason: ''
   }
  it('checking deleted', () => {
    expect(service.deleteLeave(request.id)).toBeTruthy();
  });
});
