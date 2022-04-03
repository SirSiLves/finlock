import { Component } from '@angular/core';
import { auftraege } from '@test/auftraege-data';

@Component({
  selector: 'app-auftragsverwaltung',
  templateUrl: './auftragsverwaltung.component.html',
  styleUrls: ['./auftragsverwaltung.component.scss']
})
export class AuftragsverwaltungComponent {

  auftraegeList = auftraege;

  constructor() { }

}
