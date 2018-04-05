import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MijnAccountPage } from './mijn-account';

@NgModule({
  declarations: [
    MijnAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(MijnAccountPage),
  ],
})
export class MijnAccountPageModule {}
