import { Article } from './article.model';

export class Order {
  constructor(public id: string, public items: Article[], public total: number) {}
}
