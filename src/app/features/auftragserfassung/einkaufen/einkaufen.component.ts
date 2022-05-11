import { Component, Input, OnInit } from '@angular/core';
import { WarenkorbService } from '../warenkorb/warenkorb.service';
import { gegenparteien, raiffeisen } from '@test/gegenparteien-data';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  gegenparteiList: any[] = [];

  formGroup = this.formBuilder.group({
    gegenpartei: ['', [Validators.required]]
  });

  constructor(
    private warenkorbService: WarenkorbService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.resetSourceProductList();
    this.setGegenparteiDropDown();
  }

  private resetSourceProductList(): void {
    this.sourceProducts = [];
    this.productList.forEach((p: any) => this.sourceProducts.push({...p}));
  }

  private setGegenparteiDropDown(): void {
    if (this.typ === 'VERKAUF') {
      this.gegenparteiList = raiffeisen;
      this.gegenpartei.patchValue(raiffeisen[0]);
      this.gegenpartei.markAllAsTouched();
      this.gegenpartei.disable();
    } else {
      this.gegenparteiList = gegenparteien;
    }
  }

  onInputAnzahl(product: any, $event: any): void {
    product.anzahl = $event.value;
  }

  addToShoppingCart(): void {
    this.targetProducts = this.targetProducts.filter((p: any) => p.anzahl !== 0);
    this.targetProducts.forEach((p: any) => p.gegenpartei = this.gegenpartei.value);

    if (this.typ === 'KAUF') {
      this.warenkorbService.addToBuyList(this.targetProducts);
    } else if (this.typ === 'VERKAUF') {
      this.warenkorbService.addToSellList(this.targetProducts);
    }

    this.resetSourceProductList();
    this.targetProducts = [];
  }

  isAddToShoppingCartEnabled(): boolean {
    return this.targetProducts.length === 0
      || this.targetProducts.filter((p: any) => p.anzahl * p.wert > 100000000).length > 0
      || !this.gegenpartei.value;
  }


  get gegenpartei(): FormControl {
    return this.formGroup.controls.gegenpartei as FormControl;
  }

}
