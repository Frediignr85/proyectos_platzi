import { Product } from "./product.model";
export const products: Product[] =[];
export const addProduct = (data:Product) =>{
    console.log(data)
    products.push(data)
}

export const calcStock = (): number =>{
  let total = 0
  products.forEach((item) =>{
    total += item.stock
  })
  return total
}
