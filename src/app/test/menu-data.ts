export const menu = [
  {
    label: 'Startseite',
    routerLink: '/home/news'
  },
  {
    label: 'Auftragserfassung',
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
    routerLink: '/lagerverwaltung'
  },
  {
    label: 'Kontakt',
    routerLink: '/kontakt'
  }
];



export const menuWithALlLinks = [
  {
    label: 'Startseite',
    routerLink: '/home/news'
  },
  {
    label: 'Auftragserfassung',
    routerLink: '/auftragserfassung/einkaufen',
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
    routerLink: '/auftragsverwaltung/auftragsliste',
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
    routerLink: '/lagerverwaltung'
  },
  {
    label: 'Kontakt',
    routerLink: '/kontakt'
  }
];

