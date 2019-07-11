import { Component, Input } from '@angular/core';
import { CamsModel } from "../../models/cams.model";

@Component({
  selector: 'app-cam-box',
  templateUrl: './cam-box.component.html',
  styleUrls: ['./cam-box.component.scss']
})
export class CamBoxComponent {
  @Input() cam: CamsModel;

  public date: Date = new Date();
}
