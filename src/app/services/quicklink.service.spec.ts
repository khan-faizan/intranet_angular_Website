import { TestBed } from '@angular/core/testing';

import { QuickLinkService } from './quicklink.service';

describe('QuickLinkService', () => {
  let service: QuickLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
