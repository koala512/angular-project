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
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getAllArticles().subscribe((c) => (this.articles = c));
  }

  // itemCount() {
  //   return this.productService.itemCount(this.articles);
  // }

  // total(): number {
  //   return this.productService.total(this.articles);
  // }

  // onDeleteProduct = ({ id }: Article) => {
  //   this.productService.onDeleteProduct(id).subscribe((c) => (this.articles = c));
  // };

  // updateItemQty = ({ newQty, item }: { newQty: number; item: Article }) => {
  //   this.productService.patchItem(item, newQty).subscribe((c) => (this.articles = c));
  // };

  order = () => {
    this.router.navigate(['/order']);
  };
}
