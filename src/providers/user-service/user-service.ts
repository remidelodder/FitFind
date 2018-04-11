import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(private db: AngularFireDatabase) {
    console.log('Hello UserServiceProvider Provider');
  }

  getAll() {
    return this.db.list("users").valueChanges();
  }
  save(
    id: string,
    naam: string,
    voornaam: string,
    gebruikersnaam: string,
    geboortedatum: string,
    geslacht: string,
    gewicht: string,
    lengte: string
  ) {
    return this.db.object('users/' + id).set({
      id: id,
      naam: naam,
      voornaam: voornaam,
      gebruikersnaam: gebruikersnaam,
      geboortedatum: geboortedatum,
      geslacht: geslacht,
      gewicht: gewicht,
      lengte: lengte
    });
  }
  update(
    id: string,
    naam: string,
    voornaam: string,
    gebruikersnaam: string,
    geboortedatum: string,
    geslacht: string,
    gewicht: string,
    lengte: string
  ) {
    this.db.object('users/' + id).update({
      id: id,
      naam: naam,
      voornaam: voornaam,
      gebruikersnaam: gebruikersnaam,
      geboortedatum: geboortedatum,
      geslacht: geslacht,
      gewicht: gewicht,
      lengte: lengte
    });
  }
}
