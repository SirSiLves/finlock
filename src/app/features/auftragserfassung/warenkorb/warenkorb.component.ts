import { Component, OnInit } from '@angular/core';
import { WarenkorbService } from './warenkorb.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss']
})
export class WarenkorbComponent implements OnInit {

  shoppingCartBuy$?: Observable<any>;
  shoppingCartSell$?: Observable<any>;

  send = false;

  constructor(
    private warenkorbService: WarenkorbService
  ) {
  }

  ngOnInit(): void {
    this.shoppingCartBuy$ = this.warenkorbService.shoppingCartBuy$.pipe(shareReplay());
    this.shoppingCartSell$ = this.warenkorbService.shoppingCartSell$.pipe(shareReplay());
  }

  removeFromShoppingCartBuy($event: any): void {
    this.warenkorbService.removeFromShoppingCartBuy($event);
  }

  removeFromShoppingCartSell($event: any): void {
    this.warenkorbService.removeFromShoppingCartSell($event);
  }

  sendProducts(): void {
    this.warenkorbService.reset();
    this.send = true;
  }
}
