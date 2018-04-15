import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { RegistrerenPage } from '../registreren/registreren';
import { DetailPage } from '../detail/detail';
import { EditPage } from '../edit/edit';
import { Observable } from 'rxjs/Observable';

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
  users: Array<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: UserServiceProvider
  ) {
    console.log("Navigated to with params", navParams)
    this.users = navParams.data;
  }

  ionViewDidLoad() {
    this.db.getAll().subscribe((response) => {
      console.log("Got this data", response);
      this.users = response;
    }, (error) => {
      console.log("Couldn't get data", error);
    });
  }
  itemTapped(event, user){
    /*this.navCtrl.push(RegistrerenPage, {
      user: user 
    });*/
    console.log("tapped user", user);
    this.navCtrl.push(DetailPage, user);
  }
  edit(user:any){
    this.navCtrl.push(EditPage, user);
  }
  /*save(){
    this.db.save(
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
  }*/
}
