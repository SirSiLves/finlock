import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
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
    this.items = [
      {
        label: 'Startseite',
        icon: 'pi pi-fw pi-home',
        items: [
          {
            label: 'News',
            routerLink: '/home/news'
          },
          {
            label: 'Impressum',
            routerLink: '/impressum'
          },
          {
            label: 'Datenschutzerklärung',
            routerLink: '/dsgvo'
          }
        ]
      },
      {
        label: 'Auftragserfassung',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Einkaufen',
            routerLink: '/auftragserfassung/einkaufen'
          },
          {
            label: 'Warenkorb',
            routerLink: '/auftragserfassung/warenkorb'
          },
          {
            label: 'Bestellungen',
            routerLink: '/auftragserfassung/bestellungen'
          },
        ]
      },
      {
        label: 'Auftragsverwaltung',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Auftragsliste',
            routerLink: '/auftragsverwaltung/auftragsliste'
          },
          {
            label: 'Wareneingang',
            routerLink: '/auftragsverwaltung/wareneingang'
          },
          {
            label: 'Warenausgang',
            routerLink: '/auftragsverwaltung/warenausgang'
          },
        ]
      },
      {
        label: 'Lagerverwaltung',
        icon: 'pi pi-fw pi-table',
        routerLink: '/lagerverwaltung'
      },
      {
        label: 'Kontakt',
        icon: 'pi pi-fw pi-file-o',
        routerLink: 'kontakt'
      },
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-user',
        routerLink: 'user/profil'
      }
    ];

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
