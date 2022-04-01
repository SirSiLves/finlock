import { Component, Input, OnInit } from '@angular/core';
import { WarenkorbService } from '../warenkorb/warenkorb.service';

@Component({
  selector: 'app-einkaufen',
  templateUrl: './einkaufen.component.html',
  styleUrls: ['./einkaufen.component.scss']
})
export class EinkaufenComponent implements OnInit {

  @Input() typ?: 'KAUF' | 'VERKAUF';
  @Input() productList?: any;

  sourceProducts: any[] = [];
  targetProducts: any[] = [];

  constructor(
    private warenkorbService: WarenkorbService
  ) {
  }

  ngOnInit(): void {
    this.resetSourceProductList();
  }

  private resetSourceProductList(): void {
    this.sourceProducts = [];
    this.productList.forEach((p: any) => this.sourceProducts.push({...p}));
  }

  onInputAnzahl(product: any, $event: any): void {
    product.anzahl = $event.value;
  }

  addToShoppingCart(): void {
    this.targetProducts = this.targetProducts.filter((p: any) => p.anzahl !== 0);

    if (this.typ === 'KAUF') {
      this.warenkorbService.addToBuyList(this.targetProducts);
    } else if (this.typ === 'VERKAUF') {
      this.warenkorbService.addToSellList(this.targetProducts);
    }

    this.resetSourceProductList();
    this.targetProducts = [];
  }

  isAddToShoppingCartEnabled(): boolean {
    return this.targetProducts.length === 0 || this.targetProducts.filter((p: any) => p.anzahl * p.wert > 100000000).length > 0;
  }


}
