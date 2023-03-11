import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product: Product;
  quantity: number = 1;


  constructor(private cartService: CartService) { 
    this.product = {
      id: 1,
      name: '',
      price: 1.0,
      url: '',
      description: '',
      quantity: 0
    }
  }

  ngOnInit(): void {
    
  }

  addToCart(product: Product): void {
    product.quantity = this.quantity
    this.cartService.addToCart(product,);
    alert('Added to cart!');
    this.quantity = 1;
  }


}
