import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
fullName: string = '';
address: string = '';
creditCardNumber: number = 0o0;
cartItems: Product[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems= this.cartService.getItems()
  }
  
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  submitForm(): void {
    
  }

}
