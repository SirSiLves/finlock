import { Component, OnInit } from '@angular/core';
import { auftraege } from '@test/auftraege-data';

@Component({
  selector: 'app-auftragsverwaltung',
  templateUrl: './auftragsverwaltung.component.html',
  styleUrls: ['./auftragsverwaltung.component.scss']
})
export class AuftragsverwaltungComponent implements OnInit {

  auftraegeList = auftraege;

  constructor() { }

  ngOnInit(): void {
  }

}
