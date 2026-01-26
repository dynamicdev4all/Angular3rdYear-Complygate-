import { Component } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-item-card',
  imports: [Counter],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {

}
