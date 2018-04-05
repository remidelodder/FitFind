import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KrachttrainingSpieropbouwPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-krachttraining-spieropbouw',
  templateUrl: 'krachttraining-spieropbouw.html',
})
export class KrachttrainingSpieropbouwPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KrachttrainingSpieropbouwPage');
  }

}
