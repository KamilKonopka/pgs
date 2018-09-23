import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Balme } from '../../interfaces/balme';
import { throwError } from 'rxjs';
import { Bobbio } from '../../interfaces/bobbio';


@Component ({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit {
  cam1Data: Balme;
  cam2Data: Bobbio;
  camsArray = [];

  date = new Date();

  constructor(public http: ApiService) { }

  ngOnInit() {
    this.getCamsData();
  }

  getCamsData() {
    this.http.getHttp().subscribe(data => {
      this.cam1Data = data[26];
      this.cam2Data = data[216];
    },
    err => {
      throwError('Cannot load the data');
    });
  }
}


