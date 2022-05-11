export const menu = [
  {
    label: 'Startseite',
    icon: 'pi pi-fw pi-home',
    routerLink: '/home/news'
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
  }
];
