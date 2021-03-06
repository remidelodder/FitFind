import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the RegistrerenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registreren',
  templateUrl: 'registreren.html',
})
//HELP Data moet in database terechtkomen
// README: Welke data?
export class RegistrerenPage {
  users = {
    email: "",
    password: "",
    password2: ""
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private AuthService: AuthServiceProvider,
    private toastCtrl: ToastController,
    private UserService: UserServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrerenPage');
  }
  register() {
    if (this.users.password === this.users.password2) {
      this.AuthService.register(this.users.email, this.users.password)
        .then(() => {
          if (this.AuthService.isRegisterSuccess) {
            this.AuthService.isRegisterSuccess = false;
            this.navCtrl.pop();
          }
        });
    } else {
      this.presentToast("Passwords need to be identical.");
    }
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast', message);
    });

    toast.present();
  }
}