import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

 myProductObservable!: Observable<any>;
 id!: number;


  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id =parseInt(params['id'])
    });
  }

  ngOnInit() {
    this.myProductObservable = this.productsService.getOneProduct(this.id);
    
  }
}

