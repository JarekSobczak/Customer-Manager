import { TestBed } from '@angular/core/testing';

import { CustomerAddDeactivateGuardService } from './customer-add-deactivate-guard.service';

describe('CustomerAddDeactivateGuardService', () => {
  let service: CustomerAddDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAddDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
