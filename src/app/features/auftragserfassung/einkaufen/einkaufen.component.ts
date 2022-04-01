import { Component, Input } from '@angular/core';
import { WarenkorbService } from '../warenkorb/warenkorb.service';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-einkaufen',
  templateUrl: './einkaufen.component.html',
  styleUrls: ['./einkaufen.component.scss']
})
export class EinkaufenComponent {

  @Input() typ?: 'KAUF' | 'VERKAUF';
  @Input() productList?: any;

  constructor(
    private warenkorbService: WarenkorbService
  ) {
  }

  addToShoppingCard(product: any, anzahl: InputNumber): void {
    if (this.typ === 'KAUF') {
      this.warenkorbService.addToBuyList(product, anzahl.value);
    } else if (this.typ === 'VERKAUF') {
      this.warenkorbService.addToSellList(product, anzahl.value);
    }

    anzahl.writeValue(0);
  }


}
