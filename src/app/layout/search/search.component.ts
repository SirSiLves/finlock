import { Component, OnInit } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { menu } from '@test/menu-data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  isSearching = false;
  isOpening = false;
  results: any[] = [];

  searchTargets = [...menu];

  constructor() {
  }

  ngOnInit(): void {
    this.searchTargets.push({
      label: 'Anmelden',
      icon: '',
      routerLink: 'anmelden'
    });

    this.searchTargets.push({
      label: 'Abmelden',
      icon: '',
      routerLink: 'user/profil'
    });
  }

  onChange(searchValue: any): void {
    if (this.isSearching) return; // ExpressionChangedAfterItHasBeenCheckedError fix

    this.isSearching = true;
    this.results = [];

    this.search(searchValue, this.searchTargets);

    this.searchValue = searchValue;
    this.isSearching = false;
  }

  search(searchValue: string, menuList: MenuItem[]): void {
    menuList.forEach((m: any) => {
      if (!!m.items) {
        this.search(searchValue, m.items);
      } else {
        if (searchValue.length > 0 && m.label.toLowerCase().includes(searchValue.toLowerCase())
          || searchValue.length > 0 && m.routerLink.toLowerCase().includes(searchValue.toLowerCase())) {
          this.results.push(m);
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


}
