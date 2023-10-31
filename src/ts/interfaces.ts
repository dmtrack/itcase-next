export interface ISizes {
    id: number;
    label: string;
    number: number;
}

export interface IColors {
    id: number;
    name: string;
    images: string[];
    price: string;
    description: string;
    sizes: number[];
}

export interface IProduct {
    id: number;
    name: string;
    colors: IColors[];
}
