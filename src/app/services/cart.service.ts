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
    const index = this.productsInCart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.productsInCart[index].quantity = product.quantity;
    } else {
      this.productsInCart.push(product);
    }
  }
}
 


