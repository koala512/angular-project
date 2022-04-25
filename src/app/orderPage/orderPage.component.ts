import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './orderPage.component.html',
  styleUrls: ['./orderPage.component.scss'],
})
export class OrderPageComponent implements OnInit {
  orders!: Order[];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((o) => (this.orders = o));
    console.log(this.orders, 'orders');
  }
}
