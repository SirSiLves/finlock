import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../../core/authentication.service';
import { menu } from '@test/menu-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = menu;
  itemsWithoutLogin!: MenuItem[];
  $user = this.authenticationService.user$;

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.initialiseMenu();
  }

  private initialiseMenu(): void {
    this.itemsWithoutLogin = [
      {
        label: 'Anmelden',
        routerLink: '/anmelden'
      },
      {
        label: 'Impressum',
        routerLink: '/impressum'
      },
      {
        label: 'Datenschutzerklärung',
        routerLink: '/dsgvo'
      },
      {
        label: 'Kontakt',
        routerLink: 'kontakt'
      },
    ];
  }

}
