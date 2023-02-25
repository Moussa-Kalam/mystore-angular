import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  

  submitForm(): void {
    
  }

}
