import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cams } from '../interfaces/cams';
import { Observable } from 'rxjs';

const url = 'https://makevoid-skicams.p.mashape.com/cams.json';
const options = {
  headers: {
    'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw',
    'content-type': 'application/json',
    'charset': 'utf-8'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getHttp(): Observable<{Cams}> {
    return this.http.get<{Cams}>(url, options);
  }
}

