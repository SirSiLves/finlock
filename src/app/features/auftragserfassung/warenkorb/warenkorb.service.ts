import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {

  constructor() { }

  addToBuyList(product: any): void {
    console.log('kauf', product);
  }

  addToSellList(product: any): void {
    console.log('verkauf', product);
  }
}
