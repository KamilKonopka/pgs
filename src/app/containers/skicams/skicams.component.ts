import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { CamsModel } from '../../models/cams.model';
import * as _ from 'lodash';

@Component ({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit {

  cams$: Observable<CamsModel[]>;
  acceptedCams: string[] = ['Bielmonte', 'Passo dello Stelvio'];

  constructor(public http: ApiService) { }

  ngOnInit() {
    this.getCamsData();
  }

  getCamsData() {
    this.cams$ = this.http.getHttp().pipe(
      map((data) => {
        const camsArray = Object.values(data).map(
          (el: CamsModel) => {
            return this.acceptedCams.includes(el.name) ? this.parseCamsModel(el) : undefined;
          });
        return camsArray.filter(el => !!el);
      }),
    );
  }

  getFirstTwoItems(object: Object, count: number) {
    return _.chain(object).keys().sort().take(count).reduce((memo, current) => {
      memo[current] = object[current];
      return memo;
    }, {}).value();
  }

  parseCamsModel(cam: CamsModel): CamsModel {
    const newElement: CamsModel = {
      ...cam,
      cams: this.getFirstTwoItems(cam.cams, 2),
    };
    newElement.camsArray = [...Object.values(newElement.cams)];
    return newElement;
  }
}


