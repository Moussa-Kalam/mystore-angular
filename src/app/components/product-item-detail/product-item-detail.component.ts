import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
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
