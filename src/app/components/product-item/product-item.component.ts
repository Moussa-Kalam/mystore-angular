import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product: Product;

  constructor() { 
    this.product = {
      id: 1,
      name: '',
      price: 1.0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
    
  }

}
