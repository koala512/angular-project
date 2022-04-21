import { Injectable } from '@angular/core';
import { Product, variant, Basket }   from '../models/product.model';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


    // basket:Basket=[];

    // onAddProduct(product:Product, price:number): void {

    //   //insert into basket product and price
    //   let basketProduct:Basket = {
    //     product: product,
    //     price: price,
    //   }

    // }
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return <Observable<Product[]>>this.http.get('http://localhost:3000/products')
  }
  getOneProduct(id: number) {
    return <Observable<Product>>this.http.get(`http://localhost:3000/products/${id}`)
  }
  onFavoriteProduct(product: Product): Observable<Product>{
    return <Observable<Product>>this.http.put(`http://localhost:3000/products/${product.id}/favorite`,{})
  }
  onAddProduct(product: Product, price: number): Observable<Product>{
    return <Observable<Product>>this.http.put(`http://localhost:3000/products/${product.id}/addToCart`,{
      price: price
    })
  }
