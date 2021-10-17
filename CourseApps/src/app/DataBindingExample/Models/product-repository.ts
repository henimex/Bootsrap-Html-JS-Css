import { SimpleDataSource } from './dataSource';
import { Product } from './product';

export class ProductRepository {
  private dataSoruce: SimpleDataSource;
  private products: Product[];

  constructor() {
    this.dataSoruce = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSoruce.getProducts().forEach((p) => {
      this.products.push(p);
    });
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((p) => p.id == id) as Product;
  }
}
