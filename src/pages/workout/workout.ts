import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbWorkoutPage } from '../ab-workout/ab-workout';
import { KrachtPage } from '../kracht/kracht';
import { KrachttrainingSpieropbouwPage } from '../krachttraining-spieropbouw/krachttraining-spieropbouw';

/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
  }
  ToonAbs() {
    this.navCtrl.push(AbWorkoutPage);
  }
  ToonKracht() {
    this.navCtrl.push(KrachtPage);
  }
  ToonKrachttraining() {
    this.navCtrl.push(KrachttrainingSpieropbouwPage);
  }
}
