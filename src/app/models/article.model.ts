export type variant = {name: string , price: number}
export class Article{
    constructor(
        public id: number,
        public title: string,
        public imageUrl: string,
        public variant: variant,
    )
    {}
}