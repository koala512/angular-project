import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {


  constructor(private http: HttpClient){}

  getCartItems(): Observable<Article[]>{
    return <Observable<Article[]>>this.http.get(`http://localhost:3000/cart`)
  }
  onAddProduct(article: Article): Observable<Article[]>{
    return <Observable<Article[]>>this.http.put(`http://localhost:3000/cart`, article)
  }
  getAllArticles(): Observable<Article[]> {
    return <Observable<Article[]>>this.http.get('http://localhost:3000/cart');
  }
  onDeleteProduct(article: Article): Observable<Article>{
    return <Observable<Article>>this.http.delete(`http://localhost:3000/cart/${article.articleId}`)
  }
  onDeleteAllProducts(): Observable<Article[]>{
    return <Observable<Article[]>>this.http.delete(`http://localhost:3000/cart`)
  }
  articlesCount(cart: Article[]) { return cart?.length; }

  totalPrice(total:number,cart: Article[]) {
    return cart.reduce((acc, item) => acc + parseInt(item.price), total);
  }
}
