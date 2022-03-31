import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items?: MenuItem[];

  constructor() {
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
            routerLink: '/news'
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
            label: 'Kauf',
            routerLink: '/auftragserfassung/kauf'
          },
          {
            label: 'Verkauf',
            routerLink: '/auftragserfassung/verkauf'
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
        routerLink: 'profil'
      }
    ];
  }

}
