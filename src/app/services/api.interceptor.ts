import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        const request = req.clone({
          headers: req.headers
            .set('X-Mashape-Key', 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw')
            .set('content-type', 'application/json')
            .set('charset', 'utf-8')
        });
        return next.handle(request);
      }),
    );
  }
}
