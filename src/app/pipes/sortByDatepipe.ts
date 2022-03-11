import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
    transform(products: Product[], order?: any) {
        if(!products) return products;
        let desc = !(order && order === 'asc');
        return products.sort((a, b) => {
            if (desc) return new Date(b.date).getTime() -new Date(a.date).getTime()
            else return new Date(a.date).getTime() - new Date(b.date).getTime()
        });
    }
}
