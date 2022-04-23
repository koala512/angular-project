export type variant = {size: string , price: number}
export class Article{
    constructor(
        public id: string,
        public title: string,
        public imageUrl: string,
        public price: number,
    )
    {}
}
