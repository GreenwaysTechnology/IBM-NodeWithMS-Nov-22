import ProductService from './services/product.service.js'

let productService = new ProductService()
console.log(productService.findAll())