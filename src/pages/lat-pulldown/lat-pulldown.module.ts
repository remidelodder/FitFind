import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatPulldownPage } from './lat-pulldown';

@NgModule({
  declarations: [
    LatPulldownPage,
  ],
  imports: [
    IonicPageModule.forChild(LatPulldownPage),
  ],
})
export class LatPulldownPageModule {}
