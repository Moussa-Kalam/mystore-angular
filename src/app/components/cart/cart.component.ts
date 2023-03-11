import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartInfoService } from 'src/app/services/cart-info.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
fullName: string = '';
address: string = '';
creditCardNumber: string = '';
total: number = 0;

quantity: number = 0;
cartProducts: Product[] = [];

  constructor(
    private router: Router, 
    private cartService: CartService,
    private cartInfoService: CartInfoService) {}

  ngOnInit(): void {
    this.cartProducts= this.cartService.getProducts()

    for (let product of this.cartProducts) {
      let productTotal = product.price * product.quantity;
      this.total += productTotal;
    }
    this.total = Math.round(this.total * 100) / 100;
  }
  

  submitForm(): void {
    this.cartInfoService.fullName = this.fullName;
    this.cartInfoService.total = this.total;
    this.router.navigateByUrl('/order-success');
  }

  onQuantityChange(): void {
    this.total = 0;
    for (let product of this.cartProducts) {
      if(product.quantity == 0) {
        const index = this.cartProducts.indexOf(product);
        if (index !== -1) {
          this.cartProducts.splice(index, 1);
          alert(`The product ${product.name} has been removed form the cart.`)
        }
      }
      let productTotal = product.price * product.quantity;
      this.total += productTotal;
    }
    this.total = Math.round(this.total * 100) / 100;

  }

}
