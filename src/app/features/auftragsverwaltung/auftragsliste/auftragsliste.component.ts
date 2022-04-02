import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auftragsliste',
  templateUrl: './auftragsliste.component.html',
  styleUrls: ['./auftragsliste.component.scss']
})
export class AuftragslisteComponent implements OnInit {

  @Input() itemList?: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
