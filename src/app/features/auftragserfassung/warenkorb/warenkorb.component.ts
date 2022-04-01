import { Component, OnDestroy, OnInit } from '@angular/core';
import { WarenkorbService } from './warenkorb.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss']
})
export class WarenkorbComponent implements OnInit {

  shoppingCartBuy$?: BehaviorSubject<any>;
  shoppingCartSell$?: BehaviorSubject<any>;

  constructor(
    private warenkorbService: WarenkorbService
  ) {
  }

  ngOnInit(): void {
    this.shoppingCartBuy$ = this.warenkorbService.shoppingCartBuy$;
    this.shoppingCartSell$ = this.warenkorbService.shoppingCartSell$;
  }

  removeFromShoppingCartBuy($event: any): void {
    this.warenkorbService.removeFromShoppingCartBuy($event);
  }

  removeFromShoppingCartSell($event: any): void {
    this.warenkorbService.removeFromShoppingCartSell($event);
  }
}
