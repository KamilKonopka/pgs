import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

const headers = {
  'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw',
    'content-type': 'application/json',
    'charset': 'utf-8'
};

export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        const request = req.clone({ setHeaders: headers });
        return next.handle(request);
      }),
    );
  }
}
