(() =>{
  const login = (data:{email:string, password: string}) =>{
      console.log(data.email,data.password);
  }
  const objeto = {
      email: 'fredy@gmail.com',
      password: '1231312'
  }
  login(objeto)

  type Sizes = 'S' | 'M' | 'L'  | 'XL'
  type Product = {
    title:string,
    createAt:Date,
    stock:number,
    size?: Sizes
  }
  const products: Product[] =[];
  const addProduct = (data:Product) =>{
      console.log(data)
      products.push(data)
  }

  const objeto_producto = {
      title: "producto1",
      createAt: new Date(),
      stock: 12,
      size: 'XL'
  }
  addProduct({
    title: "producto1",
    createAt: new Date(),
    stock: 12,
    size: 'XL'
})
  console.log(products)



})();
