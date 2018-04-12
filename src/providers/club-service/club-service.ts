import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the ClubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClubServiceProvider {

  /*selectedCategorie = "bredene";

  clubs = {
    bredene: [
      {
        adres: "Kapelstraat 151, 8450",
        club: "Basic Fit",
        lijstnaam: "Bredene",
        naam: "Fitnessclub Bredene Kapelstraat",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    bruggeA: [
      {
        adres: "Maalsesteenweg 50, 8310",
        club: "Basic Fit",
        lijstnaam: "Brugge A",
        naam: "Fitnessclub Brugge Maalsesteenweg",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    bruggeB: [
      {
        adres: "Frank Van Ackerpromenade 4, 8000",
        club: "Basic Fit",
        lijstnaam: "Brugge B",
        naam: "Fitnessclub Brugge Station",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    ieper: [
      {
        adres: "Patersstraat 5, 8900",
        club: "Basic Fit",
        lijstnaam: "Ieper",
        naam: "Fitnessclub Ieper Patersstraat",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    knokkeheist: [
      {
        adres: "Duinenwater 28, 8300",
        club: "Basic Fit",
        lijstnaam: "Knokke-Heist",
        naam: "Fitnessclub Knokke-Heist Duinenwater",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    kortrijkA: [
      {
        adres: "Meensestraat 9, 8500",
        club: "Basic Fit",
        lijstnaam: "Kortrijk A",
        naam: "Fitnessclub Kortrijk Meensestraat",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    kortrijkB: [
      {
        adres: "Engelsewandeling 2J, 8500",
        club: "Basic Fit",
        lijstnaam: "Kortrijk B",
        naam: "Fitnessclub Kortrijk Engelsewandeling",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    menen: [
      {
        adres: "Kortrijkstraat 398, 8930",
        club: "Basic Fit",
        lijstnaam: "Menen",
        naam: "Fitnessclub Menen Kortrijkstraat",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    oostendeA: [
      {
        adres: "Northlaan 13, 8400",
        club: "Basic Fit",
        lijstnaam: "Oostende A",
        naam: "Fitnessclub Oostende Searena 24/4",
        openingsuren: [
          {
            ma: "08:00 - 22:30 (non-stop)",
            di: "08:00 - 22:30 (non-stop)",
            wo: "08:00 - 22:30 (non-stop)",
            do: "08:00 - 22:30 (non-stop)",
            vr: "08:00 - 22:30 (non-stop)",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    oostendeB: [
      {
        adres: "Torhoutsesteenweg 611, 8400",
        club: "Basic Fit",
        lijstnaam: "Oostende B",
        naam: "Fitnessclub Oostende Torhoutsesteenweg",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    roeselareA: [
      {
        adres: "Brugsesteenweg 363, 8800",
        club: "Basic Fit",
        lijstnaam: "Roeselare A",
        naam: "Fitnessclub Roeselare Brugsesteenweg",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    roeselareB: [
      {
        adres: "Ooststraat 34, 8800",
        club: "Basic Fit",
        lijstnaam: "Roeselare B",
        naam: "Fitnessclub Roeselare Ooststraat",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
    waregem: [
      {
        adres: "Gentseweg 611, 8793",
        club: "Basic Fit",
        lijstnaam: "Waregem Sint-Eloois-Vijve",
        naam: "Fitnessclub Waregem St-Eloois-Vijve Gentseweg Club",
        openingsuren: [
          {
            ma: "08:00 - 22:30",
            di: "08:00 - 22:30",
            wo: "08:00 - 22:30",
            do: "08:00 - 22:30",
            vr: "08:00 - 22:30",
            za: "09:00 - 16:00",
            zo: "09:00 - 16:00"
          }
        ]
      }
    ],
  }*/
  constructor(private db: AngularFireDatabase) {
    console.log('Hello ClubServiceProvider Provider');
  }
  getAll() {
    return this.db.list("clubs").valueChanges();
  }
  /*getAll() {
    switch (this.selectedCategorie) {
      case "bredene": {
        return this.clubs.bredene;
      }
      case "bruggeA": {
        return this.clubs.bruggeA;
      }
      case "bruggeB": {
        return this.clubs.bruggeB;
      }
      case "ieper": {
        return this.clubs.ieper;
      }
      case "knokkeheist": {
        return this.clubs.knokkeheist;
      }
      case "kortrijkA": {
        return this.clubs.kortrijkA;
      }
      case "kortrijkB": {
        return this.clubs.kortrijkB;
      }
      case "menen": {
        return this.clubs.menen;
      }
      case "oostendeA": {
        return this.clubs.oostendeA;
      }
      case "oostendeB": {
        return this.clubs.oostendeB;
      }
      case "roeselareA": {
        return this.clubs.roeselareA;
      }
      case "roeselareB": {
        return this.clubs.roeselareB;
      }
      case "waregem": {
        return this.clubs.waregem;
      }
    }
  }*/
}
