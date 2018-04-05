import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeatedLegPressPage } from './seated-leg-press';

@NgModule({
  declarations: [
    SeatedLegPressPage,
  ],
  imports: [
    IonicPageModule.forChild(SeatedLegPressPage),
  ],
})
export class SeatedLegPressPageModule {}
