import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  user: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: UserServiceProvider
  ) {
    console.log("Navigated to with params", navParams);
    this.user = navParams.data;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
  save() {
    this.db.save(
      this.user.id,
      this.user.naam,
      this.user.voornaam,
      this.user.gebruikersnaam,
      this.user.geboortedatum,
      this.user.geslacht,
      this.user.gewicht,
      this.user.lengte
    )
      .then((response) => {
        console.log("Saved item");
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.log("Couldn't save item, got error", error);
      })
  }
}
