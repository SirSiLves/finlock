import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LayoutService } from '../../../../layout/layout.service';

@Component({
  selector: 'app-warenkorb-details',
  templateUrl: './warenkorb-details.component.html',
  styleUrls: ['./warenkorb-details.component.scss']
})
export class WarenkorbDetailsComponent {

  @Input() productList?: any;
  @Output() remove$ = new EventEmitter<any>();

  mobile$ = this.layoutService.mobile;

  constructor(
    private layoutService: LayoutService
  ) {
  }

  emitRemove(product: any): void {
    this.remove$.emit(product);
  }
}
