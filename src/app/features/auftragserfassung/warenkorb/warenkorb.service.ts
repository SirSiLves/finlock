import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {

  shoppingCartBuy$ = new BehaviorSubject<any>([]);
  shoppingCartSell$ = new BehaviorSubject<any>([]);

  constructor(
    private messageService: MessageService
  ) {
  }

  addToBuyList(products: any[]): void {
    this.shoppingCartBuy$.next(this.shoppingCartBuy$.value.concat(products));
    this.addCompleted();
  }

  addToSellList(products: any[]): void {
    this.shoppingCartSell$.next(this.shoppingCartSell$.value.concat(products));
    this.addCompleted();
  }

  addCompleted(): void {
    this.messageService.add(
      {severity: 'success', detail: 'Zum Warenkorb hinzugefügt'}
    );
  }

  removeFromShoppingCartBuy(product: any): void {
    this.shoppingCartBuy$.next(this.shoppingCartBuy$.value.filter((p: any) => p !== product));
  }

  removeFromShoppingCartSell(product: any): void {
    this.shoppingCartSell$.next(this.shoppingCartSell$.value.filter((p: any) => p !== product));
  }

  reset(): void {
    this.shoppingCartBuy$.next([]);
    this.shoppingCartSell$.next([]);
  }
}
