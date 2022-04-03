import { Component, Input } from '@angular/core';
import { statusAusgangList, statusEingangList } from '@test/status-data';

@Component({
  selector: 'app-auftragsliste',
  templateUrl: './auftragsliste.component.html',
  styleUrls: ['./auftragsliste.component.scss']
})
export class AuftragslisteComponent {

  @Input() itemList?: any[];

  typOptions = [
    {label: 'Wareneingang', value: 'KAUF'},
    {label: 'Warenausgang', value: 'VERKAUF'}
  ];

  statusOptions = [
    {label: 'Neu', value: 'NEU'},
    {label: 'Grobkontrolliert', value: 'GROBKONTROLLIERT'},
    {label: 'Feinkontrolliert', value: 'FEINKONTROLLIERT'},
    {label: 'Gerüstet', value: 'GERUESTET'},
    {label: 'Verpackt', value: 'VERPACKT'},
    {label: 'Versendet', value: 'VERSENDET'},
  ];

  constructor() {
  }

  getStatus(status: string): string {
    return statusEingangList.concat(statusAusgangList).filter((s: any) => s.value === status)[0].name;
  }
}
