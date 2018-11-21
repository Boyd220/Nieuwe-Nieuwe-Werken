import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PakketMakenPage } from './pakket-maken';

@NgModule({
  declarations: [
    PakketMakenPage,
  ],
  imports: [
    IonicPageModule.forChild(PakketMakenPage),
  ],
})
export class PakketMakenPageModule {}
