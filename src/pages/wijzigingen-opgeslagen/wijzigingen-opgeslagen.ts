import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WijzigingenOpgeslagenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wijzigingen-opgeslagen',
  templateUrl: 'wijzigingen-opgeslagen.html',
})
export class WijzigingenOpgeslagenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WijzigingenOpgeslagenPage');
  }

}
