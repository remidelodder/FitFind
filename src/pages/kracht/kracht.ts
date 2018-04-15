import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrossTrainerPage } from '../cross-trainer/cross-trainer';
import { SeatedLegPressPage } from '../seated-leg-press/seated-leg-press';
import { LatPulldownPage } from '../lat-pulldown/lat-pulldown';

/**
 * Generated class for the KrachtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kracht',
  templateUrl: 'kracht.html',
})
export class KrachtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KrachtPage');
  }
  ToonCrossTrainer() {
    this.navCtrl.push(CrossTrainerPage);
  }
  ToonSeatedLegPress() {
    this.navCtrl.push(SeatedLegPressPage);
  }
  ToonLatPullDown() {
    this.navCtrl.push(LatPulldownPage);
  }
}
