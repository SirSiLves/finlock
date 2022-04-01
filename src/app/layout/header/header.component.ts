import { Component, OnInit } from '@angular/core';
import { WarenkorbService } from '../../features/auftragserfassung/warenkorb/warenkorb.service';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string = "";
  shoppingCardSize$?: Observable<any>;

  constructor(
    private warenkorbService: WarenkorbService
  ) {
  }

  ngOnInit(): void {
    this.shoppingCardSize$ = combineLatest(
      [this.warenkorbService.shoppingCartBuy$, this.warenkorbService.shoppingCartSell$]
    ).pipe(
      map(([buy, sell]) => buy.length + sell.length)
    );
  }

}
