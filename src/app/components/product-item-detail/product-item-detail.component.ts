import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
productList: Product[] = [];
product: Product;
id: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) { 
    this.product = {
      id: 0,
      name: '',
      price: 1.0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductById(this.id);

    this.productService.getProducts().subscribe(data => {
      this.productList = data;
      this.product = this.getProductById(Number(this.id));
    })
  }

  getProductById(productId: number): Product {
    return this.productList.filter(item => item.id === productId)[0];
  }
}
