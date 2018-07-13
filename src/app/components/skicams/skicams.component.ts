import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component ({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit {
  camsData = {};
  constructor(public http: ApiService) { }

  ngOnInit() {
    this.getCamsData();
  }

  getCamsData() {
    this.http.getHttp().subscribe(data => {
      this.camsData = data;
      console.log(this.camsData);
    });
  }
}
