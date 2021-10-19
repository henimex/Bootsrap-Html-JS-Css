// model: ProductRepository = new ProductRepository();
//   product: Product = this.model.getProductById(3);
//   newProduct: Product = {
//     id: 1,
//     name: '',
//     description: '',
//     imageUrl: '',
//     price: 0,
//   };

//   constructor() {}

//   ngOnInit(): void {console.log(this.products)}

//   addProduct(product: Product=this.newProduct) {
//     let id = this.products.length+1;
//     product.id = id;
//     this.products.push(product);
//     console.log(this.products)
//   }

//   get products(): Product[] {
//     return this.model.getProducts();
//   }

//   getEventModel(element:any){
//     console.log(element)
//   }
