import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BalmeModel } from '../../interfaces/balme.model';
import { throwError } from 'rxjs';
import { BobbioModel } from '../../interfaces/bobbio.model';
import {filter, map} from "rxjs/operators";
import {CamsModel} from "../../interfaces/cams.model";

@Component ({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit, OnDestroy {

  private subscription;
  cam1Data: BalmeModel;
  cam2Data: BobbioModel;
  date = new Date();
  expectedCams: string[] = ['Bielmonte', 'Passo dello Stelvio'];

  constructor(public http: ApiService) { }

  ngOnInit() {
    this.getCamsData();
  }

  ngOnDestroy() {
    this.unsubscribeFromCamsData();
  }

  getCamsData() {
    this.subscription = this.http.getHttp().pipe(
      map((data) => {
        const camsArray = Object.values(data).map(
          (el: CamsModel) => {
            if (this.expectedCams.includes(el.name)) {
              return el;
            }
          });
        console.log(camsArray.filter(el => el !== undefined));
      },
        (err) => {
          throwError('Cannot load the data', err);
        }),
    ).subscribe();
  }

  unsubscribeFromCamsData() {
    this.subscription.unsubscribe();
  }
}


