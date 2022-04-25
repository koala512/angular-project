import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';
import { Order } from '../models/order.model';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  id!: string;
  cart!: Article[];
  total: number=0;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Date.now().toString();
    this.cartService.getAllArticles().subscribe((c) => (this.cart = c));
  }

  totalPrice(): string {
    return this.cartService.totalPrice(this.total,this.cart)?.toFixed(2);
  }

  confirm() {
    const order = new Order(
      this.id,
      this.cart,
      this.cartService.totalPrice(this.total, this.cart)
    );

    this.orderService.addOrder(order).subscribe();
    this.cartService.onDeleteAllProducts().subscribe((c) => (this.cart = c));
    this.router.navigate(['/orderPage']);
  }
}
