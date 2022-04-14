import { Injectable } from '@angular/core';
import { Product}   from '../models/product.model';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}


    
    getAllProducts(): Observable<Product[]> { 
      return <Observable<Product[]>>this.http.get('http://localhost:4200/products')
    }
    getOneProduct(id: number) {
      return <Observable<Product>>this.http.get(`http://localhost:4200/products/${id}`)
    }
    onFavoriteProduct(product: Product): Observable<Product>{
      return <Observable<Product>>this.http.put(`http://localhost:4200/products/${product.id}/favorite`,{})
    }  
}
