import { Component, OnInit } from '@angular/core';
import { WarenkorbService } from '../../features/auftragserfassung/warenkorb/warenkorb.service';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  shoppingCardSize$?: Observable<any>;
  $user = this.authenticationService.user$.pipe(shareReplay());

  constructor(
    private warenkorbService: WarenkorbService,
    private authenticationService: AuthenticationService
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
