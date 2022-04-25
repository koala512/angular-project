import { Component, Input } from '@angular/core';
import { Product, variant } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() myProduct!: Product;
  @Input() displayLink!: boolean;

  selected: string=this.myProduct?.variants[0].price;

  constructor(
    private productsService: ProductsService,
    private cartservice: CartService
  ) { }


  ngOnInit():void{
    this.selected=this.myProduct?.variants[0].price;
  }

  onFavorite() {
    this.productsService.onFavoriteProduct(this.myProduct).subscribe((p:Product) => {
      this.myProduct = p
    });
  }
  addToCart() {
    this.cartservice.onAddProduct(new Article(this.myProduct.id,this.myProduct.title,this.myProduct.imageUrl, this.selected)).subscribe();
  }
}
