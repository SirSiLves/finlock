import { Component } from '@angular/core';
import { auftraege } from '@test/auftraege-data';
import { OverlayPanel } from 'primeng/overlaypanel';
import { LayoutService } from '../../../layout/layout.service';

@Component({
  selector: 'app-auftrags-suche',
  templateUrl: './auftrags-suche.component.html',
  styleUrls: ['./auftrags-suche.component.scss']
})
export class AuftragsSucheComponent {

  searchValue = '';
  isSearching = false;
  isOpening = false;
  results: any[] = [];
  mobile$ = this.layoutService.mobile;

  searchTargets = [...auftraege];


  constructor(
    private layoutService: LayoutService
  ) { }

  onChange(searchValue: any): void {
    if (this.isSearching) return; // ExpressionChangedAfterItHasBeenCheckedError fix

    this.isSearching = true;

    this.results = this.searchTargets.filter(a => a.id === Number(searchValue));

    this.searchValue = searchValue;
    this.isSearching = false;
  }

  showSearchBox(op: OverlayPanel, $event: Event): void {
    if (this.isOpening) return; // ExpressionChangedAfterItHasBeenCheckedError fix

    this.isOpening = true;

    if (!this.searchValue) {
      op.hide();
      this.isOpening = false;
    } else {
      setTimeout(() => {
        if (this.searchValue && Number(this.searchValue) > 0) {
          op.show($event);
        }
        this.isOpening = false;
      }, 200);
    }
  }

}


