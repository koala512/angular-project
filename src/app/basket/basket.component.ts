import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  articles: Article[]=[];
  total : number= 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getAllArticles().subscribe((c) => (this.articles = c));
  }

  //function to delete an article from the cart
  onDeleteProduct(article: Article): void {
    this.cartService.onDeleteProduct(article).subscribe();
    this.articles = this.articles.filter((a) => a.articleId !== article.articleId);
  }

  articlesCount() {
    return this.cartService.articlesCount(this.articles);
  }

  //total price of articles in the cart
  totalPrice() {
    return this.cartService.totalPrice(this.total, this.articles);
  }

  // onDeleteProduct = (articleId : Article) => {
  //   this.cartService.onDeleteProduct(articleId).subscribe((c) => (this.articles = c));
  // };

  // updateItemQty = ({ newQty, item }: { newQty: number; item: Article }) => {
  //   this.productService.patchItem(item, newQty).subscribe((c) => (this.articles = c));
  // };

  order = () => {
    this.router.navigate(['/order']);
  };
  home = () => {
    this.router.navigate(['/']);
  }
}
