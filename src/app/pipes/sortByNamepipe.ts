import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({ name: 'sortByName' })
export class SortByNamePipe implements PipeTransform {
    transform(products: Product[], order?: any) {
        let AZ = !(order && order === 'A-Z');
        return products.sort((a, b) => {
            if (AZ) return b.title.localeCompare(a.title)
            else return a.title.localeCompare(b.title)
        });
    }
}