import {Component, OnInit} from '@angular/core';
import {Card} from "../../interfaces/card.model";
import {CardDataService} from "../../services/card-data.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  cards: Card[] = [];

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }

  constructor(
    private cardService: CardDataService,
  ) {}

}
