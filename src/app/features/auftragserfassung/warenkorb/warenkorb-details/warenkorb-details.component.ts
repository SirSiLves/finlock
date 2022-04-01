import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-warenkorb-details',
  templateUrl: './warenkorb-details.component.html',
  styleUrls: ['./warenkorb-details.component.scss']
})
export class WarenkorbDetailsComponent {

  @Input() productList?: any;
  @Output() remove$ = new EventEmitter<any>();

  constructor() {
  }

  emitRemove(product: any): void {
    this.remove$.emit(product);
  }
}
