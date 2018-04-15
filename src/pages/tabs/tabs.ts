import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { WorkoutPage } from '../workout/workout';
import { VoortgangPage } from '../voortgang/voortgang';
import { ClubfinderPage } from '../clubfinder/clubfinder';
import { InstellingenPage } from '../instellingen/instellingen';
import { MijnAccountPage } from '../mijn-account/mijn-account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WorkoutPage;
  tab3Root = VoortgangPage;
  tab4Root = ClubfinderPage;
  tab5Root = InstellingenPage;
  tab6Root = MijnAccountPage;

  constructor() {

  }
}
