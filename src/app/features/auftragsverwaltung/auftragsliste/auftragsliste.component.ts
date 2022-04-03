import { Component, Input } from '@angular/core';
import { statusList } from '@test/status-data';
import { gegenparteien } from '@test/gegenparteien-data';

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
    {label: 'Eingelagert', value: 'EINGELAGERT'},
  ];

  constructor() {
  }

  getStatus(status: string): string {
    return statusList.filter((s: any) => s.value === status)[0].name;
  }
}
