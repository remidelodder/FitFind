import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrunchBalansPage } from '../crunch-balans/crunch-balans';
import { StarSitUpsPage } from '../star-sit-ups/star-sit-ups';
import { PlankRepsPage } from '../plank-reps/plank-reps';

/**
 * Generated class for the AbWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ab-workout',
  templateUrl: 'ab-workout.html',
})
export class AbWorkoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbWorkoutPage');
  }
  ToonCrunchInBalans() {
    this.navCtrl.push(CrunchBalansPage);
  }
  ToonStarSitUps() {
    this.navCtrl.push(StarSitUpsPage);
  }
  ToonPlankReps() {
    this.navCtrl.push(PlankRepsPage);
  }
}
