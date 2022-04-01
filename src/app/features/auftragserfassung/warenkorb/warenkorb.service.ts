import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {

  shoppingCardBuy: any[] = [];
  shoppingCardSell: any[]= [];

  constructor() { }

  addToBuyList(product: any): void {
    this.shoppingCardBuy.push(product);
  }

  addToSellList(product: any): void {
    this.shoppingCardSell.push(product);
  }
}
