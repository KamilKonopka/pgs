import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://makevoid-skicams.p.mashape.com/cams.json';
const headers = {
  'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw',
  'content-type': 'application/json',
  'charset': 'utf-8'
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getHttp(): Observable<any> {
    return this.http.get<any>(url, { headers: headers });
  }
}

