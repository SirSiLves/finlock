import { gegenparteien } from '@test/gegenparteien-data';

export const auftraege = [
  {
    id: 1,
    createDate: new Date(),
    status: 'NEU',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 500000,
    gegenpartei: gegenparteien[4],
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 10000
      },
      {
        produkt: '100',
        kategorie: 'CHF',
        wert: 100,
        anzahl: 4000
      }
    ]
  },
  {
    id: 2,
    createDate: new Date(),
    status: 'GROBKONTROLLIERT',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 1000000,
    gegenpartei: gegenparteien[3],
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 10000
      },
      {
        produkt: '50',
        kategorie: 'CHF',
        wert: 50,
        anzahl: 8000
      },
      {
        produkt: '200',
        kategorie: 'CHF',
        wert: 200,
        anzahl: 2500
      }
    ]
  },
  {
    id: 3,
    createDate: new Date(),
    status: 'VERPACKT',
    inBearbeitung: false,
    typ: 'VERKAUF',
    wert: 50000,
    gegenpartei: gegenparteien[0],
    pallet: 'AABB01',
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000,
        bag: 'B003'
      },
      {
        produkt: '100',
        kategorie: 'CHF',
        wert: 100,
        anzahl: 400,
        bag: 'B004'
      },
    ]
  },
  {
    id: 4,
    createDate: new Date(),
    status: 'VERPACKT',
    inBearbeitung: false,
    typ: 'VERKAUF',
    wert: 50000,
    gegenpartei: gegenparteien[0],
    pallet: 'AABB01',
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000,
        bag: 'B005'
      },
      {
        produkt: '100',
        kategorie: 'CHF',
        wert: 100,
        anzahl: 400,
        bag: 'B001'
      },
    ]
  },
  {
    id: 5,
    createDate: new Date(),
    status: 'NEU',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 100000,
    gegenpartei: gegenparteien[2],
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000
      },
      {
        produkt: '20',
        kategorie: 'CHF',
        wert: 20,
        anzahl: 4500
      }
    ]
  },
  {
    id: 6,
    createDate: new Date(),
    status: 'FEINKONTROLLIERT',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 100000,
    gegenpartei: gegenparteien[0],
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000
      },
      {
        produkt: '20',
        kategorie: 'CHF',
        wert: 20,
        anzahl: 4500
      }
    ]
  },
  {
    id: 7,
    createDate: new Date(),
    status: 'EINGELAGERT',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 100000,
    gegenpartei: gegenparteien[1],
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000
      },
      {
        produkt: '20',
        kategorie: 'CHF',
        wert: 20,
        anzahl: 4500
      }
    ]
  },
  {
    id: 8,
    createDate: new Date(),
    status: 'EINGELAGERT',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 100000,
    gegenpartei: gegenparteien[0],
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000
      },
      {
        produkt: '20',
        kategorie: 'CHF',
        wert: 20,
        anzahl: 4500
      }
    ]
  },
  {
    id: 9,
    createDate: new Date(),
    status: 'NEU',
    inBearbeitung: false,
    typ: 'VERKAUF',
    wert: 500000,
    gegenpartei: gegenparteien[2],
    pallet: undefined,
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 10000,
        bag: 'B002'
      },
      {
        produkt: '100',
        kategorie: 'CHF',
        wert: 100,
        anzahl: 4000,
        bag: 'B003'
      },
    ]
  },
  {
    id: 10,
    createDate: new Date(),
    status: 'GROBKONTROLLIERT',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 50000,
    gegenpartei: gegenparteien[0],
    produkte: [
      {
        produkt: '50',
        kategorie: 'CHF',
        wert: 50,
        anzahl: 1000
      }
    ]
  },
  {
    id: 11,
    createDate: new Date(),
    status: 'VERSENDET',
    inBearbeitung: false,
    typ: 'VERKAUF',
    wert: 50000,
    gegenpartei: gegenparteien[1],
    pallet: 'AABB02',
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000,
        bag: 'B007'
      },
      {
        produkt: '100',
        kategorie: 'CHF',
        wert: 100,
        anzahl: 400,
        bag: 'B008'
      },
    ]
  },
  {
    id: 12,
    createDate: new Date(),
    status: 'GERUESTET',
    inBearbeitung: false,
    typ: 'VERKAUF',
    wert: 50000,
    gegenpartei: gegenparteien[0],
    pallet: undefined,
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000,
        bag: 'B009'
      },
      {
        produkt: '100',
        kategorie: 'CHF',
        wert: 100,
        anzahl: 400,
        bag: 'B003'
      },
    ]
  },
  {
    id: 13,
    createDate: new Date(),
    status: 'GERUESTET',
    inBearbeitung: false,
    typ: 'VERKAUF',
    wert: 50000,
    gegenpartei: gegenparteien[0],
    pallet: undefined,
    produkte: [
      {
        produkt: '10',
        kategorie: 'CHF',
        wert: 10,
        anzahl: 1000,
        bag: 'B001'
      },
      {
        produkt: '100',
        kategorie: 'CHF',
        wert: 100,
        anzahl: 400,
        bag: 'B001'
      },
    ]
  },
  {
    id: 14,
    createDate: new Date(),
    status: 'NEU',
    inBearbeitung: false,
    typ: 'KAUF',
    wert: 50000,
    gegenpartei: gegenparteien[4],
    produkte: [
      {
        produkt: '50',
        kategorie: 'CHF',
        wert: 50,
        anzahl: 1000
      }
    ]
  },



];
