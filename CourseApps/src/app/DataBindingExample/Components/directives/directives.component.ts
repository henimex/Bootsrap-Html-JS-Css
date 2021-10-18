import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductRepository } from '../../Models/product-repository';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  model: ProductRepository = new ProductRepository();
  products: Product[] = this.model.getProducts();
  swChanger: number = 2;
  newProducts:Product[]
  constructor() {}

  ngOnInit(): void {
    //this.getNewProducts();
  }

  addProduct() {
    let id = this.products.length;
    let product = {
      id: id,
      name: 'Manuel Ekleme',
      description: 'Manuel',
      imageUrl: 'https://picsum.photos/202/302',
      price: 1000,
    };
    this.products.push(product);
  }

  getNewProducts(): Product[] {
    let item1 = {
      id: 99,
      name: 'Yeni Ürün 1',
      description: 'New',
      imageUrl: 'https://picsum.photos/202/302',
      price: 147,
    };
    let item2 = {
      id: 98,
      name: 'Yeni Ürün 2',
      description: 'new',
      imageUrl: 'https://picsum.photos/202/302',
      price: 265,
    };
    let item3 = {
      id: 97,
      name: 'Yeni Ürün 3',
      description: 'Neuuw',
      imageUrl: 'https://picsum.photos/202/302',
      price: 150,
    };

    let arr = [];
    arr.push(item1);
    arr.push(item2);
    arr.push(item3);
    this.newProducts = arr;
    console.log(this.newProducts);
    return arr;
  }
}
