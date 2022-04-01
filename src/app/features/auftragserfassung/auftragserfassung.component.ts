import { Component, OnInit } from '@angular/core';
import { productBuyList, productSellList } from '@test/products-data';

@Component({
  selector: 'app-auftragserfassung',
  templateUrl: './auftragserfassung.component.html',
  styleUrls: ['./auftragserfassung.component.scss']
})
export class AuftragserfassungComponent implements OnInit {

  productBuyList = productBuyList;
  productSellList = productSellList;

  constructor() { }

  ngOnInit(): void {
  }

}
