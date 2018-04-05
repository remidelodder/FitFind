import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbWorkoutPage } from './ab-workout';

@NgModule({
  declarations: [
    AbWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(AbWorkoutPage),
  ],
})
export class AbWorkoutPageModule {}
