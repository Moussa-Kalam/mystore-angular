import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartInfoService {
  fullName: string = '';
  total: number = 0;

  constructor() { }
}
