import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {

  shoppingCardBuy: any[] = [];
  shoppingCardSell: any[]= [];

  constructor(
    private messageService: MessageService
  ) { }

  addToBuyList(product: any, anzahl: number): void {
    this.shoppingCardBuy.push({
      anzahl: anzahl,
      produkt: product
    });

    this.messageService.add(
      {severity:'success', detail: 'Zum Warenkorb hinzugefügt'}
    );
  }

  addToSellList(product: any, anzahl: number): void {
    this.shoppingCardSell.push({
      anzahl: anzahl,
      produkt: product
    });

    this.messageService.add(
      {severity:'success', detail: 'Zum Warenkorb hinzugefügt'}
    );
  }
}
