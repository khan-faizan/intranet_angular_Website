import { TestBed } from '@angular/core/testing';

import { APLTeamService } from './aplteams.service';

describe('AnnouncementService', () => {
  let service: APLTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APLTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
