export type Category = {

    id : number;
    name : string;

};

export type ProductDTO = {

    id : number;
    name : string;
    description : string;
    price : number;
    imgUrl : string;
    categories : Category[];

}

