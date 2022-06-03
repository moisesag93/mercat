export interface IProduct {
    id: number;
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    // release: { au: "2014-11-29", eu: "2014-11-28", jp: "2014-12-06", na: "2014-11-21" },
    tail: string;
    type: string;
    price: number;
    total?: number;
    qty: number;
}

export type ProductState = {
    Products: IProduct[]
}

export type ProductAction = {
    type: string
    Product: IProduct
}

export type DispatchType = (args: ProductAction) => ProductAction