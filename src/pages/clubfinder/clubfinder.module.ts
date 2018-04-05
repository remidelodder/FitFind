import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClubfinderPage } from './clubfinder';

@NgModule({
  declarations: [
    ClubfinderPage,
  ],
  imports: [
    IonicPageModule.forChild(ClubfinderPage),
  ],
})
export class ClubfinderPageModule {}
