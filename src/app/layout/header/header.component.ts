import { Component, OnInit } from '@angular/core';
import { WarenkorbService } from '../../features/auftragserfassung/warenkorb/warenkorb.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string = "";
  shoppingCardSize?: Subject<number>;

  constructor(
    private warenkorbService: WarenkorbService
  ) { }

  ngOnInit(): void {
    this.shoppingCardSize = this.warenkorbService.total;
  }

}
