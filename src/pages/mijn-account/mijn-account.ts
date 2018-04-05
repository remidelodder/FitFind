import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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
  item:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService:UserServiceProvider) {
    console.log("Navigated to with params", navParams)
    this.item = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MijnAccountPage');
  }
  save(){
    this.userService.save(
      this.item.id,
      this.item.naam,
      this.item.voornaam,
      this.item.gebruikersnaam,
      this.item.geboortedatum,
      this.item.geslacht,
      this.item.gewicht,
      this.item.lengte
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
