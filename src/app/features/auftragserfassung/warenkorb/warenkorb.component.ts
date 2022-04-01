import { Component, Input } from '@angular/core';
import { WarenkorbService } from './warenkorb.service';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss']
})
export class WarenkorbComponent {

  shoppingCardBuy = this.warenkorbService.shoppingCartBuy;
  shoppingCardSell = this.warenkorbService.shoppingCartSell;

  constructor(
    private warenkorbService: WarenkorbService
  ) { }

}
