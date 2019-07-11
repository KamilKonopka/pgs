import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://makevoid-skicams.p.mashape.com/cams.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getHttp(): Observable<any> {
    return this.http.get<any>(url);
  }
}

