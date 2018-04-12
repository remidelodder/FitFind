import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Observable } from 'rxjs/Observable';
import { ClubServiceProvider } from '../../providers/club-service/club-service';

/**
 * Generated class for the ClubfinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clubfinder',
  templateUrl: 'clubfinder.html',
})
export class ClubfinderPage {
  bestemming: string;
  start: string

  clubs: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator,
    private toastCtrl: ToastController,
    private db: ClubServiceProvider
  ) {
    this.start = "";
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ClubfinderPage");
    this.clubs = this.db.getAll();

    this.clubs.subscribe((result) => {
      console.log("got this data from provider", result);
    }, (error) => {
      console.log("Didn't get any data", error);
    })
  }
  navigate() {
    let options: LaunchNavigatorOptions = {
      start: this.start
    };
    this.launchNavigator.navigate(this.bestemming, options)
      .then(
        success => this.presentToast('Launched navigator'),
        error => this.presentToast('Error launching navigator:' + error)
      );
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
