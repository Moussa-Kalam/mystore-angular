import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: Product[] = [];


  constructor() { }

  // Get all the items in the cart
  getProducts(): Product[] {
    return this.productsInCart;
  }

  // Add product to cart
  addToCart(product: Product): void {
    for (let item of this.productsInCart) {
      if (item.name == product.name) {
        item.quantity += product.quantity
        return
        
      }
    }
    this.productsInCart.push(product);
  }

}
 


