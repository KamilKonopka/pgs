import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected authCode = 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw';
  protected url = 'https://makevoid-skicams.p.mashape.com/cams.json';

  constructor(private http: HttpClient) { }

  public getHttp(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public returnAuthCode(): Observable<string> {
    return of(this.authCode);
  }
}

