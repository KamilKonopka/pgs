import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Balme } from '../../interfaces/balme';
import { throwError, Observable } from 'rxjs';
import { Bobbio } from '../../interfaces/bobbio';


@Component ({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit, OnDestroy {

  private subscription;
  cam1Data: Balme;
  cam2Data: Bobbio;
  camsArray = [];

  date = new Date();

  constructor(public http: ApiService) { }

  ngOnInit() {
    this.getCamsData();
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }

  getCamsData() {
    this.subscription = this.http.getHttp().subscribe(data => {
      this.cam1Data = data[26];
      this.cam2Data = data[216];
    },
    err => {
      throwError('Cannot load the data');
    });
  }
}


