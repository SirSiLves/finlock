import { Component, Input, OnInit } from '@angular/core';
import { statusList } from '@test/status-data';

@Component({
  selector: 'app-auftragsliste',
  templateUrl: './auftragsliste.component.html',
  styleUrls: ['./auftragsliste.component.scss']
})
export class AuftragslisteComponent {

  @Input() itemList?: any[];

  constructor() { }

  getStatus(status: string): string {
    return statusList.filter((s: any) => s.value === status)[0].name;
  }
}
