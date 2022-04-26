import { Component, Input } from '@angular/core';
import { statusAusgangList, statusEingangList } from '@test/status-data';
import { LayoutService } from '../../../layout/layout.service';

@Component({
  selector: 'app-auftragsliste',
  templateUrl: './auftragsliste.component.html',
  styleUrls: ['./auftragsliste.component.scss']
})
export class AuftragslisteComponent {

  @Input() itemList?: any[];

  mobile$ = this.layoutService.mobile;

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

  constructor(
    private layoutService: LayoutService
  ) {
  }

  getStatus(status: string): string {
    return statusEingangList.concat(statusAusgangList).filter((s: any) => s.value === status)[0].name;
  }
}
