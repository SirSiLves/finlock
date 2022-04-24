import { Component } from '@angular/core';
import versions, { TsAppVersion } from '../../../_versions';
import { AuthenticationService } from '../../core/authentication.service';
import { LayoutService } from '../layout.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentDate = new Date();
  version: TsAppVersion = versions;
  user$ = this.authenticationService.user;
  mobile$ = this.layoutService.mobile;

  constructor(
    private authenticationService: AuthenticationService,
    private layoutService: LayoutService
  ) { }


  abmelden(): void {
    this.authenticationService.logout();
  }
}
