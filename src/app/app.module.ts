import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OverzichtPage} from '../pages/overzicht/overzicht';
import { PakketMakenPage } from '../pages/pakket-maken/pakket-maken';
import { ReviewPage } from '../pages/review/review';
import { ProfielPage } from '../pages/profiel/profiel';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverzichtPage,
    PakketMakenPage,
    ReviewPage,
    ProfielPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverzichtPage,
    PakketMakenPage,
    ReviewPage,
    ProfielPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
