import { Component, Input } from '@angular/core';
import { Product, variant } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() myProduct!: Product;
  @Input() displayLink!: boolean;
  selected: variant | undefined;
  multiplier: number | undefined;

  constructor(private productsService: ProductsService) { }

  ngOnInit():void{this.selected=this.myProduct?.variants[0]}

  onFavorite() {
    this.productsService.onFavoriteProduct(this.myProduct)
  }

  onSelected() {
    
  }

}
