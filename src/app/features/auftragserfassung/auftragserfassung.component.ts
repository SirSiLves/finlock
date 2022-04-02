import { Component } from '@angular/core';
import { productBuyList, productSellList } from '@test/products-data';

@Component({
  selector: 'app-auftragserfassung',
  templateUrl: './auftragserfassung.component.html',
  styleUrls: ['./auftragserfassung.component.scss']
})
export class AuftragserfassungComponent {

  productBuyList = productBuyList;
  productSellList = productSellList;

  constructor() { }

}
