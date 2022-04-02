import { Component, Input } from '@angular/core';
import { statusList } from '@test/status-data';

@Component({
  selector: 'app-auftragsliste-details',
  templateUrl: './auftragsliste-details.component.html',
  styleUrls: ['./auftragsliste-details.component.scss']
})
export class AuftragslisteDetailsComponent {

  @Input() auftrag: any;

  constructor() { }

  getStatus(status: string): string {
    return statusList.filter((s: any) => s.value === status)[0].name;
  }

}
