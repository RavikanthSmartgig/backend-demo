import { Injectable } from '@nestjs/common';
import { IProduct, IProductInput, IProductUpdateInput } from 'src/types';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  product: IProduct[] = [
    {
      pId: '12232',
      pName: 'Amazon',
      price: 789,
    },
    {
      pId: '12832',
      pName: 'Netflix',
      price: 999,
    },
  ];

  getAllProduct() {
    return this.product;
  }

  createProduct(productInput: IProductInput) {
    const newProduct: IProduct = {
      pId: uuidv4(),
      ...productInput,
    };
    this.product.push(newProduct);
    return newProduct;
  }

  updateProduct(pId: any, productUpdate: IProductUpdateInput) {
    const indexToUpdate = this.product.findIndex(
      (product) => product.pId == pId,
    );
    if (indexToUpdate >= 0) {
      let newProduct = this.product[indexToUpdate];
      newProduct = {
        ...newProduct,
        ...productUpdate,
      };
      this.product[indexToUpdate] = newProduct;
      return newProduct;
    }
  }
  deleteProduct(pId: any) {
    // const indexToUpdate = this.product.findIndex(
    //   (product) => product.pId == pId,
    // );
    this.product = this.product.filter((product) => product.pId != pId);
    return pId;
  }

  getProductById(pId: any) {
    //logic to get Product
    return null
  }
}
