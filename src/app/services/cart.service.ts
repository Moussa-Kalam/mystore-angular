import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: Product[] = [];
  // quantity: number = 1;


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
  // addToCart(product: Product, quantity: number = 1): Product[] {
  //   const productInCart = this.items.find(item => item.id === product.id);
  //   if (productInCart) {
  //     productInCart.quantity = quantity;
  //   } else {
  //     this.items.push({...product, quantity: quantity});
  //   }
  //   return this.items;
  // }

  // // Remove product to cart
  // removeFromCart(product: Product): void {
  //   const index = this.items.findIndex(item => item.id === product.id);
  //   if (index !== -1) {
  //     this.items.splice(index, 1);
  //   }
  // }

  // // Update product quantity
  // updateQuantity(productId: number, quantity: number): void {
  //   const productInCart = this.items.find(item => item.id === productId);
  //   if(productInCart) {
  //     productInCart.quantity = quantity
  //     this.items = this.items.map(item => {
  //       if(item.id === productId) {
  //         return productInCart
  //       } else {
  //         return item
  //       }
  //     } )
  //   }
    
  

  // // Empty the cart
  // clearCart(): Product[] {
  //   this.items = [];
  //   return this.items;
  // }

  // // Get number of items in the cart
  // numberOfItemsInCart(): number {
  //   let numberOfItems = 0;
  //   this.items.forEach(item => numberOfItems += Number(item.quantity));
  //   return numberOfItems;
  // }


// addToCart(product: Product, quantity: number) {
//     let item = this.items.value.find((item) => item.id === product.id);
//     item
//       ? (item.quantity += quantity)
//       : this.items.next([...this.items.value, { ...product, quantity }]);
//     localforage.setItem('cart', this.items.value);

//     this.toastr.success(`${product.name} added to cart`, 'Success', {
//       timeOut: 2000,
//     });
//   }



