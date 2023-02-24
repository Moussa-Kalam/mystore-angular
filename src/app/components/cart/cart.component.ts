import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
fullName: string = '';
address: string = '';
creditCardNumber: number = 0o0;
cartItems = [];

  constructor() {}

  ngOnInit(): void {
    
  }

  submitForm(): void {
    const checkoutForm = {
      fullName: this.fullName,
      address: this.address,
      creditCardNumber: this.creditCardNumber
    }
  }

}
