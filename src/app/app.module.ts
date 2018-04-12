import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { ClubServiceProvider } from '../providers/club-service/club-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActiviteitPage } from '../pages/activiteit/activiteit';
import { ClubfinderPage } from '../pages/clubfinder/clubfinder';
import { InstellingenPage } from '../pages/instellingen/instellingen';
import { LoginPage } from '../pages/login/login';
import { MijnAccountPage } from '../pages/mijn-account/mijn-account';
import { PlanPage } from '../pages/plan/plan';
import { PlanDetailsPage } from '../pages/plan-details/plan-details';
import { RegistrerenPage } from '../pages/registreren/registreren';
import { VoortgangPage } from '../pages/voortgang/voortgang';
import { WijzigingenOpgeslagenPage } from '../pages/wijzigingen-opgeslagen/wijzigingen-opgeslagen';
import { WorkoutPage } from '../pages/workout/workout';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { AbWorkoutPage } from '../pages/ab-workout/ab-workout';
import { KrachtPage } from '../pages/kracht/kracht';
import { KrachttrainingSpieropbouwPage } from '../pages/krachttraining-spieropbouw/krachttraining-spieropbouw';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';

var config = {
  apiKey: "AIzaSyCeL1sbyeGe8IuPEnfN3L0ZPjsOphPQ9Gw",
  authDomain: "fitfind-2ac5c.firebaseapp.com",
  databaseURL: "https://fitfind-2ac5c.firebaseio.com",
  projectId: "fitfind-2ac5c",
  storageBucket: "fitfind-2ac5c.appspot.com",
  messagingSenderId: "602115158150"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ActiviteitPage,
    ClubfinderPage,
    InstellingenPage,
    LoginPage,
    MijnAccountPage,
    PlanPage,
    PlanDetailsPage,
    RegistrerenPage,
    VoortgangPage,
    WijzigingenOpgeslagenPage,
    WorkoutPage,
    AbWorkoutPage,
    KrachtPage,
    KrachttrainingSpieropbouwPage,
    DetailPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ActiviteitPage,
    ClubfinderPage,
    InstellingenPage,
    LoginPage,
    MijnAccountPage,
    PlanPage,
    PlanDetailsPage,
    RegistrerenPage,
    VoortgangPage,
    WijzigingenOpgeslagenPage,
    WorkoutPage,
    AbWorkoutPage,
    KrachtPage,
    KrachttrainingSpieropbouwPage,
    DetailPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    AuthServiceProvider,
    UserServiceProvider,
    ClubServiceProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClubServiceProvider
  ]
})
export class AppModule { }
