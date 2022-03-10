import { Component, OnInit, Input }  from '@angular/core';
import { Product }            from '../models/product.model';
import { ProductsService }    from '../services/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Product[];
  search: string = '';
  title: string = '';
  order: string ='';
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.search = "";
    this.products = this.productsService.getAllProducts();
    this.title = "my HP app";
}

}
