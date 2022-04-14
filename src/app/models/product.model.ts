export class Product{
    constructor(
        public id: number,
        public title: string, 
        public description: string,
        public imageUrl: string,
        public price: number[],
        public date : Date,
        public favorite : number,
        public isFavorite : boolean,
        public size : string[]
    )
    {}
}
    
