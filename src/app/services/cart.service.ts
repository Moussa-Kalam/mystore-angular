import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];


  constructor() { }

  // Get all the items in the cart
  getItems(): Product[] {
    return this.items;
  }

  // Add product to cart
  addToCart(product: Product, quantity: number = 1): Product[] {
    const productInCart = this.items.find(item => item.id === product.id);
    if (productInCart) {
      productInCart.quantity = quantity;
    } else {
      this.items.push({...product, quantity: quantity});
    }
    return this.items;
  }

  // Remove product to cart
  removeFromCart(product: Product): void {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Update product quantity
  updateQuantity(product: Product, quantity: number): void {
    const productInCart = this.items.find(item => item.id === product.id);
    if (productInCart) {
      if (quantity > 0) {
        productInCart.quantity = quantity;
      } else {
        this.removeFromCart(productInCart);
      }
    }
  }

  // Empty the cart
  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  // Get number of items in the cart
  numberOfItemsInCart(): number {
    let numberOfItems = 0;
    this.items.forEach(item => numberOfItems += Number(item.quantity));
    return numberOfItems;
  }

}
