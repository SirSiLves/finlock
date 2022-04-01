import { Component, Input, OnInit } from '@angular/core';
import { productBuyList } from '@test/products-data';
import { WarenkorbService } from '../warenkorb/warenkorb.service';

@Component({
  selector: 'app-einkaufen',
  templateUrl: './einkaufen.component.html',
  styleUrls: ['./einkaufen.component.scss']
})
export class EinkaufenComponent implements OnInit {

  @Input() typ?: 'KAUF' | 'VERKAUF';
  @Input() productList?: any;

  constructor(
    private warenkorbService: WarenkorbService
  ) {
  }

  ngOnInit(): void {

  }

  addToShoppingCard(product: any): void {
    if (this.typ === 'KAUF') {
      this.warenkorbService.addToBuyList(product);
    } else if (this.typ === 'VERKAUF') {
      this.warenkorbService.addToSellList(product);
    }
  }
}
