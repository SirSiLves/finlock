import { gegenparteien, raiffeisen } from '@test/gegenparteien-data';

export const auftraege = [
  {
    id: 1,
    createDate: new Date(),
    status: 'NEU',
    typ: 'KAUF',
    wert: 500000,
    gegenpartei: gegenparteien[0],
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
    status: 'NEU',
    typ: 'KAUF',
    wert: 1000000,
    gegenpartei: gegenparteien[0],
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
    status: 'NEU',
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
    id: 4,
    createDate: new Date(),
    status: 'GROBKONTROLLIERT',
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
    id: 99,
    createDate: new Date(),
    status: 'NEU',
    typ: 'VERKAUF',
    wert: 500000,
    gegenpartei: raiffeisen[0],
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
      },
    ]
  },


];
