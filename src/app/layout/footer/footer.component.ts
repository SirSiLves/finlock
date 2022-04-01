import { Component } from '@angular/core';
import versions, { TsAppVersion } from '../../../_versions';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentDate = new Date();
  version: TsAppVersion = versions;

  constructor() { }


}
