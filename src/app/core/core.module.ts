import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { ApiService, JwtService } from './services';

const SERVICES = [ApiService, JwtService]

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ...SERVICES
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
