import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IProduct, IProductInput, IProductUpdateInput } from 'src/types';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProduct() {
    return this.productService.getAllProduct();
  }

  @Post()
  createProduct(@Body() product: IProductInput) {
    //call service
    return this.productService.createProduct(product);
  }

  @Patch(':id')
  updateProduct(@Body() product: IProductUpdateInput, @Param('id') id: any) {
    //we'll  return complete product

    return this.productService.updateProduct(id, product);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    //i want to return deleted product Id
    console.log('id', id);

    return this.productService.deleteProduct(id);
  }

  @Get(':id') //localhost:3002/product/12hgy21
  productById(@Param('id') id: string) {
    //return product of requsest Id if exist
    console.log('id', id);

    return null;
  }
}
