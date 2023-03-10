import { Component } from '@angular/core';
import { CartInfoService } from 'src/app/services/cart-info.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  fullName: string = '';
  total: number = 0

  constructor(
    private cartInfoService: CartInfoService
  ) { }

  ngOnInit(): void {
    this.fullName = this.cartInfoService.fullName;
    this.total = this.cartInfoService.total;
  }

}
