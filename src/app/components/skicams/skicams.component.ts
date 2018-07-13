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
  dataAssigned = false;

  public model1: Balme = {
    cams: {
      111: {
        name: 'string',
        url: 'string'
      },
      112: {
        name: 'string',
        url: 'string'
      }
    },
    name: 'string',
    prov: 'string'
  };

  public model2: Bobbio = {
    cams: {
      604: {
        name: 'string',
        url: 'string'
      },
      605: {
        name: 'string',
        url: 'string'
      },
      606: {
        name: 'string',
        url: 'string'
      }
    },
    name: 'string',
    prov: 'string'
  };

  constructor(public http: ApiService) { }

  ngOnInit() {
    this.getCamsData();
    this.assignInterface();
  }

  getCamsData() {
    this.http.getHttp().subscribe(data => {
      this.cam1Data = data[26];
      this.cam2Data = data[216];
      console.log(this.cam1Data, this.cam2Data);
    },
  err => {
    throwError('Cannot load the data');
  },
() => {
  this.dataAssigned = true;
  });
}

  assignInterface() {
    Object.assign(this.model1, this.cam1Data);
    Object.assign(this.model2, this.cam2Data);
  }
}


