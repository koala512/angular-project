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

  selected: number=this.myProduct?.variants[0].price;

  constructor(private productsService: ProductsService){}

  ngOnInit():void{
    this.selected=this.myProduct?.variants[0].price;
  }

  onFavorite() {
    this.productsService.onFavoriteProduct(this.myProduct).subscribe((p:Product) => {
      this.myProduct = p
    });
  }
  addToCart() {
    this.productsService.onAddProduct(this.myProduct, this.selected);
  }
}
