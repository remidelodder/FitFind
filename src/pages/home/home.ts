import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutPage } from '../workout/workout';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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
  item:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public UserProvider: UserServiceProvider
  ) {
    console.log("Navigated to with params", navParams);
    if(navParams.data){
      this.item = navParams.data;
    }
    else{
      console.log("Navigated to without params");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  showWorkout(){
    this.navCtrl.push(WorkoutPage);
  }
}
