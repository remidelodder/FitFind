import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the MijnAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mijn-account',
  templateUrl: 'mijn-account.html',
})
export class MijnAccountPage {
  users: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService:UserServiceProvider) {
    console.log("Navigated to with params", navParams)
    this.users = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MijnAccountPage');
  }
  save(){
    this.userService.save(
      this.users.id,
      this.users.naam,
      this.users.voornaam,
      this.users.gebruikersnaam,
      this.users.geboortedatum,
      this.users.geslacht,
      this.users.gewicht,
      this.users.lengte
    )
    .then((response)=>{
      console.log("Saved item");
      // TODO: present toast/message to user
      this.navCtrl.pop();
    })
    .catch((error)=>{
      console.log("Couldn't save item, got error",error);
      // TODO: present toast/message to user
    });
  }
}
