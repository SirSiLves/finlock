import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auftragsliste-details',
  templateUrl: './auftragsliste-details.component.html',
  styleUrls: ['./auftragsliste-details.component.scss']
})
export class AuftragslisteDetailsComponent {

  @Input() auftrag: any;

  constructor() { }

}
