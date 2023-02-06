import { TestBed } from '@angular/core/testing';

import { CorsInterceptorInterceptor } from './cors-interceptor.interceptor';

describe('CorsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CorsInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CorsInterceptorInterceptor = TestBed.inject(CorsInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
