import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BenchPressDbPage } from './bench-press-db';

@NgModule({
  declarations: [
    BenchPressDbPage,
  ],
  imports: [
    IonicPageModule.forChild(BenchPressDbPage),
  ],
})
export class BenchPressDbPageModule {}
