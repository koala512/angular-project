export type variant = { size: string, price: string };
export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public variants: variant[],
    public date: Date,
    public favorite: number,
    public isFavorite: boolean
  ) {}
}
export class Basket {
  constructor(
    public product: Product,
    public price: string
  ) {};
}
