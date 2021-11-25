import { TestBed } from '@angular/core/testing';

import { EmployerResolver } from './employer.resolver';

describe('EmployerResolver', () => {
  let resolver: EmployerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmployerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
