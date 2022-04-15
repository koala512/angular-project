export type variant = {name: string , price: number}
export class Product{
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public variants: variant[],
        public date : Date,
        public favorite : number,
        public isFavorite : boolean,
    )
    {}
}

