import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {

  total: Subject<number> = new Subject<number>();

  shoppingCartBuy: any[] = [];
  shoppingCartSell: any[] = [];

  constructor(
    private messageService: MessageService
  ) {
  }

  addToBuyList(products: any): void {
    this.shoppingCartBuy.push(products);
    this.addCompleted();
  }

  addToSellList(products: any): void {
    this.shoppingCartSell.push(products);
    this.addCompleted();
  }

  addCompleted(): void {
    this.messageService.add(
      {severity: 'success', detail: 'Zum Warenkorb hinzugefügt'}
    );

    this.total.next(this.shoppingCartBuy.length + this.shoppingCartSell.length);
  }
}
