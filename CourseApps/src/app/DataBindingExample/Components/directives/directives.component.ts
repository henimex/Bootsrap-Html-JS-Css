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
  constructor() {}

  ngOnInit(): void {}
}
