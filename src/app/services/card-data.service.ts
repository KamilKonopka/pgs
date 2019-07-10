import { Injectable } from '@angular/core';
import {Card} from "../interfaces/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private cards: Card[] = [
    {
      image: '../../assets/img/img-grid1.png',
      heading: 'Lorem Ipsum',
      content: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
    },
    {
      image: '../../assets/img/img-grid2.png',
      heading: 'Lorem Ipsum',
      content: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
    },
    {
      image: '../../assets/img/img-grid3.png',
      heading: 'Lorem Ipsum',
      content: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
    }
  ];

  getCards(): Card[] {
    return this.cards.slice();
  }
}
