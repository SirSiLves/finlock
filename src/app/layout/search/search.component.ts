import { Component, OnInit } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { menu } from '@test/menu-data';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../layout.service';
import { auftraege } from '@test/auftraege-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchValue = '';
  isSearching = false;
  isOpening = false;
  results: any[] = [];
  mobile$ = this.layoutService.mobile;

  constructor(
    private layoutService: LayoutService
  ) {
  }

  onChange(searchValue: any): void {
    if (this.isSearching) return; // ExpressionChangedAfterItHasBeenCheckedError fix

    this.isSearching = true;
    this.results = [];

    this.searchMenu(searchValue, menu);
    this.searchAuftraege(searchValue, auftraege);


    this.searchValue = searchValue;
    this.isSearching = false;
  }

  searchMenu(searchValue: string, list: any): void {
    list.forEach((m: any) => {
      if (!!m.items) {
        this.searchMenu(searchValue, m.items);
      } else {
        if (searchValue.length > 0 && m.label.toLowerCase().includes(searchValue.toLowerCase())
          || searchValue.length > 0 && m.routerLink.toLowerCase().includes(searchValue.toLowerCase())) {
          this.results.push(m);
        }
      }
    });
  }

  searchAuftraege(searchValue: string, list: any): void {
    list.forEach((auftrag: any) => {
      if (auftrag.id.toString() === searchValue) {
        if (auftrag.typ === 'KAUF') {
          const menu = {
            label: 'Auftrag ID in Wareneingang',
            routerLink: '/auftragsverwaltung/wareneingang/' + auftrag.id
          };

          this.results.push(menu);
        } else {
          const menu = {
            label: 'Auftrag ID in Warenausgang',
            routerLink: '/auftragsverwaltung/warenausgang/' + auftrag.id
          };

          this.results.push(menu);
        }
      }
    });
  }

  showSearchBox(op: OverlayPanel, $event: Event): void {
    if (this.isOpening) return; // ExpressionChangedAfterItHasBeenCheckedError fix

    this.isOpening = true;

    if (this.searchValue.length === 0) {
      op.hide();
      this.isOpening = false;
    } else {
      setTimeout(() => {
        if (this.searchValue.length > 0) {
          op.show($event);
        }
        this.isOpening = false;
      }, 200);
    }
  }


  clear(op: OverlayPanel): void {
    this.searchValue = '';
    op.hide();
  }
}
