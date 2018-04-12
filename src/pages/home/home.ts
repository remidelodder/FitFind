import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutPage } from '../workout/workout';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
//HELP gebruikersnaam uit database halen
//HELP Link naar 'WorkoutPage' ook veranderen in tabs
export class HomePage {
  users:Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: UserServiceProvider
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.users = this.db.getAll();

    this.users.subscribe((result)=>{
      console.log("got this data from provider", result);
    }, (error)=>{
      console.log("Didn't get any data", error);
    })
  }

  /*save(){
    this.db.save(
      this.users.id, 
      this.users.naam,
      this.users.voornaam,
      this.users.geboortedatum,
      this.users.geslacht,
      this.users.gewicht,
      this.users.lengte
    ).then((Response) => {
      console.log("Saved users");
      this.navCtrl.pop();
    })
    .cath((error) => {
      console.log("Couldn't save users, got error", error);
    })
  }*/
  showWorkout() {
    this.navCtrl.push(WorkoutPage);
  }
}
