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
  price:number = 395.9756
  pretext:string="lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet lorem. Lorem ipsumSit proident laboris ex nostrud velit reprehenderit fugiat. In cillum adipisicing voluptate in ullamco exercitation fugiat amet ullamco aliqua sint veniam veniam duis. Minim esse adipisicing culpa tempor dolore. Ut sit est cillum cillum mollit sint tempor laboris in. Qui veniam consectetur incididunt exercitation aliqua consectetur ea officia proident adipisicing commodo velit adipisicing et. Dolore id enim consectetur eiusmod ullamco commodo nisi sint. Id qui ipsum nisi magna laborum magna amet fugiat."


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

  colorTS: string = 'red';
  fontSizeTS: string = '10px';

  satatementColor: string =
    this.model.getProductById(3).price >= 300 ? 'red' : 'green';

  getStyles(id: number): Object {
    let product = this.model.getProductById(id);
    return {
      fontSize: '16px',
      color: product.price == 500 ? 'blue' : 'yellow',
      fontWeight: 'bold',
    };
  }

  onSubmit(event: any) {
    event.stopPropagation(); // button div in içerisinde ise butona tıklandıgında divin icinde oldugundan div de tıklanmıs gibi davranır. bunu engellemek icin bu kod kullanılır.
    console.log(event);
    console.log('Button Name : ', event.srcElement.name);
    console.log('Button ID : ', event.srcElement.id);
  }

  onDivClicked(event: any) {
    console.log('div clicked');
  }

  onKeyUp() {
    console.log(
      'HTM ÜZERİNDEN SADECE KEYUP.ENTER SONRASINDA CALISACAK SEKİLDE TANIMLANABİLİR.'
    );
  }

  onKeyUp2(event: any) {
    console.log(event.target.value);
  }

  onKeyUp3(mail: string) {
    console.log(mail);
  }
  testMail: string = 'test@gmail.com';

  twoWay() {
    console.log(this.testMail);
  }

  constructor() {}

  ngOnInit(): void {}
}
