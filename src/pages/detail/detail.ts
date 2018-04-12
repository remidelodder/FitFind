import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  user: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log("navigate with params", navParams);
    if (navParams.data) {
      this.user = navParams.data;
    }
    else {
      console.log("Navigated to without params");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
