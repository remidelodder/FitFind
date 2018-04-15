import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { LocalNotifications } from '@ionic-native/local-notifications'
import { MijnAccountPage } from '../mijn-account/mijn-account';

/**
 * Generated class for the InstellingenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instellingen',
  templateUrl: 'instellingen.html',
})
export class InstellingenPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private vibration: Vibration,
  ) {
  }
  vibrate() {
    this.vibration.vibrate(2000);
  }
  showAccount(){
    this.navCtrl.push(MijnAccountPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstellingenPage');
  }

}
