import { Component, Input } from '@angular/core';
import { statusAusgangList, statusEingangList } from '@test/status-data';

@Component({
  selector: 'app-auftragsliste-details',
  templateUrl: './auftragsliste-details.component.html',
  styleUrls: ['./auftragsliste-details.component.scss']
})
export class AuftragslisteDetailsComponent {

  @Input() auftrag: any;

  constructor() { }

  getStatus(status: string): string {
    return statusEingangList.concat(statusAusgangList).filter((s: any) => s.value === status)[0].name;
  }

}
