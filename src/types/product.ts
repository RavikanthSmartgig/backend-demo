export interface IProduct {
  pId: string;
  pName: string;
  price: number;
}

export interface IProductInput {
  pName: string;
  price: number;
}

export interface IProductUpdateInput {
  pName?: string;
  price?: number;
}
