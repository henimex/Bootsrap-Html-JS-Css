import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../../Models/product';
import { ProductRepository } from '../../Models/product-repository';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

model: ProductRepository = new ProductRepository();
  product: Product = this.model.getProductById(3);
  newProduct: Product = {
    id: 1,
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  };

  formName = new FormControl('');

  constructor() {}

  ngOnInit(): void {console.log(this.products)}

  addProduct(product: Product=this.newProduct) {
    let id = this.products.length+1;
    product.id = id;
    this.products.push(product);
    console.log(this.products)
  }

  get products(): Product[] {
    return this.model.getProducts();
  }

  getEventModel(element:any){
    console.log(element)
  }

}
