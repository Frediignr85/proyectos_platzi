import {addProduct, calcStock, products} from './product.service'

addProduct({
  title: "producto1",
  createAt: new Date(),
  stock: 12,
  size: 'XL'
})

addProduct({
  title: "producto2",
  createAt: new Date(),
  stock: 10,
})

console.log(products)
const total = calcStock();
console.log(total)
