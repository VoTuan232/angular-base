import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from '@app/core/services';
import { Observable } from 'rxjs';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  // constructor(private jwtService: JwtService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     // this.authService = this.injector.get(AuthService);
    // const token: string = this.authService.getToken();
    // add authorization header with jwt token if available
    const currentUser = null as any; // this.authenticationService.currentUserValue;
    if (currentUser && currentUser?.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser?.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
