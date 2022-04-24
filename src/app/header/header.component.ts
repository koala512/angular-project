import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  articles: Article[]=[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getAllArticles().subscribe((c) => (this.articles = c));
  }
  articlesCount() {
    return this.cartService.articlesCount(this.articles);
  }

}

