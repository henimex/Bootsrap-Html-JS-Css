import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductRepository } from '../../Models/product-repository';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css'],
})
export class TableExampleComponent implements OnInit {
  products: Product[];
  model: ProductRepository;
  selectedProduct: Product;
  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

  ngOnInit(): void {}

  getSelected(product:Product): boolean {
    return product === this.selectedProduct;
  }

  editProduct(product:Product): void {
    this.selectedProduct = product;
  }

  deleteProduct(product:Product): void {

  }
}
