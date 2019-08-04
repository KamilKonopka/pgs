import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private apiService: ApiService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.apiService.returnAuthCode().pipe(
      switchMap((authCode) => {
        const properReq = req.clone({
          headers: req.headers
            .set('X-Mashape-Key', authCode)
            .set('Content-Type', 'application/json')
            .set('charset', 'utf-8')
        });
        return next.handle(properReq);
      }),
    );
  }
}
