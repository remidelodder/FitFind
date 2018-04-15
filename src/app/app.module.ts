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

import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Vibration } from '@ionic-native/vibration';
import { LocalNotifications } from '@ionic-native/local-notifications'

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
import { AbWorkoutPage } from '../pages/ab-workout/ab-workout';
import { KrachtPage } from '../pages/kracht/kracht';
import { KrachttrainingSpieropbouwPage } from '../pages/krachttraining-spieropbouw/krachttraining-spieropbouw';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';
import { CrunchBalansPage } from '../pages/crunch-balans/crunch-balans';
import { StarSitUpsPage } from '../pages/star-sit-ups/star-sit-ups';
import { PlankRepsPage } from '../pages/plank-reps/plank-reps';
import { CrossTrainerPage } from '../pages/cross-trainer/cross-trainer';
import { SeatedLegPressPage } from '../pages/seated-leg-press/seated-leg-press';
import { LatPulldownPage } from '../pages/lat-pulldown/lat-pulldown';
import { CardioVrijPage } from '../pages/cardio-vrij/cardio-vrij';
import { SquatBarbellPage } from '../pages/squat-barbell/squat-barbell';
import { BenchPressDbPage } from '../pages/bench-press-db/bench-press-db';

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
    EditPage,
    CrunchBalansPage,
    StarSitUpsPage,
    PlankRepsPage,
    CrossTrainerPage,
    SeatedLegPressPage,
    LatPulldownPage,
    CardioVrijPage,
    SquatBarbellPage,
    BenchPressDbPage
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
    EditPage,
    CrunchBalansPage,
    StarSitUpsPage,
    PlankRepsPage,
    CrossTrainerPage,
    SeatedLegPressPage,
    LatPulldownPage,
    CardioVrijPage,
    SquatBarbellPage,
    BenchPressDbPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    AuthServiceProvider,
    UserServiceProvider,
    ClubServiceProvider,
    Vibration,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
