import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  articles: Article[] = [
    new Article(
      1,
      'jojo',
      'https://oniri-creations.com/wp-content/uploads/2022/02/ichigo-statue-oniri-creations.jpg',
      { name: 'l', price: 10 }
    ),
    new Article(
      1,
      'jojo',
      'https://oniri-creations.com/wp-content/uploads/2022/02/ichigo-statue-oniri-creations.jpg',
      { name: 'l', price: 10 }
    ),
    new Article(
      1,
      'jojo',
      'https://oniri-creations.com/wp-content/uploads/2022/02/ichigo-statue-oniri-creations.jpg',
      { name: 'l', price: 10 }
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
