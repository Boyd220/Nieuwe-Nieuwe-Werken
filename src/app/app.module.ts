import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PakketMakenPage } from '../pages/pakket-maken/pakket-maken';
import { ReviewPage } from '../pages/review/review';
import { ProfielPage } from '../pages/profiel/profiel';
import { HttpClientModule } from '@angular/common/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PakketMakenPage,
    ReviewPage,
    ProfielPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MultiselectDropdownModule,
    NgDatepickerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PakketMakenPage,
    ReviewPage,
    ProfielPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
