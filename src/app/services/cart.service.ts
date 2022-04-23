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
    console.log(article,'article');
    return <Observable<Article[]>>this.http.put(`http://localhost:3000/cart`, article)
  }
  getAllArticles(): Observable<Article[]> {
    return <Observable<Article[]>>this.http.get('http://localhost:3000/cart');
  }
  onDeleteProduct(article: Article): Observable<Article>{
    return <Observable<Article>>this.http.delete(`http://localhost:3000/cart/${article.id}`)
  }
  onDeleteAllProducts(): Observable<Article[]>{
    return <Observable<Article[]>>this.http.delete(`http://localhost:3000/cart`)
  }
}
