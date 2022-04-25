export type variant = {size: string , price: number}
export class Article{
  public articleId :string;
    constructor(
        public id: string,
        public title: string,
        public imageUrl: string,
        public price: string,
    )
    {
      this.articleId = Article.generateId(price,id);
      this.id = id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.price = price;
    }

    public static generateId(articleId: string, id:string){
      return `${articleId}::${id}`;
    }
}
