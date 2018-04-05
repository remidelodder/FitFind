import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RegistrerenPage } from '../registreren/registreren';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider) {
  }
  user = {
    email: "remidelodder@hotmail.com",
    password: "remi123"
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    this.authService.login(this.user.email, this.user.password);
    this.authService.login(this.user.email, this.user.password)
      .then(() => {
        if (this.authService.isLoggedIn) {
          this.navCtrl.setRoot(TabsPage);
        }
      });
  }
  register() {
    this.navCtrl.push(RegistrerenPage);
  }
}
