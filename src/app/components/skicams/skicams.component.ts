import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component ({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit {
  cam1Data: {Balme};
  cam2Data = {};
  camsArray = [];
  constructor(public http: ApiService) { }

  ngOnInit() {
    this.getCamsData();
  }

  getCamsData() {
    this.http.getHttp().subscribe(data => {
      this.cam1Data = data[26];
      this.cam2Data = data[216];
      console.log(this.cam1Data, this.cam2Data);
    });
  }
}

export interface Balme {
  cams: {
    111: {
      name: 'string';
      url: 'string';
    };
    112: {
      name: 'string';
      url: 'string';
    }
  };
  name: 'string';
  prov: 'string';
}

