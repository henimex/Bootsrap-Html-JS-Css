import { Product } from './product';

export class SimpleDataSource {
  private products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Product Name 1',
        description: 'Description 1',
        imageUrl: 'https://picsum.photos/200/300',
        price: 100,
      },
      {
        id: 2,
        name: 'Product Name 2',
        description: 'Description 2',
        imageUrl: 'https://picsum.photos/201/301',
        price: 200,
      },
      {
        id: 3,
        name: 'Product Name 3',
        description: 'Description 3',
        imageUrl: 'https://picsum.photos/202/302',
        price: 300,
      },
      {
        id: 4,
        name: 'Product Name 4',
        description: 'Description 4',
        imageUrl: 'https://picsum.photos/203/303',
        price: 400,
      },
      {
        id: 5,
        name: 'Product Name 5',
        description: 'Description 5',
        imageUrl: 'https://picsum.photos/204/304',
        price: 500,
      },
      {
        id: 6,
        name: 'Product Name 6',
        description: 'Description 6',
        imageUrl: 'https://picsum.photos/205/305',
        price: 600,
      },
      {
        id: 7,
        name: 'Product Name 7',
        description: 'Description 7',
        imageUrl: 'https://picsum.photos/200/306',
        price: 700,
      },
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
