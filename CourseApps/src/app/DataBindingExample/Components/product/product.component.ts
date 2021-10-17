import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductRepository } from '../../Models/product-repository';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  model: ProductRepository = new ProductRepository();
  product: Product = this.model.getProductById(3);
  disabled = false;

  getClassMap(id: number): Object {
    let product = this.model.getProductById(id);
    return {
      'bg-info': product.price <= 500,
      'bg-secondary': product.price > 600,
      'text-center text-white': product.name == 'Product Name 4',
    };
  }

  getClasses(id: number): string {
    let product = this.model.getProductById(id);
    return (product.price <= 300 ? 'bg-info' : 'bg-secondary') + ' m-2 p-2';
  }
  constructor() {}

  ngOnInit(): void {}
}
