import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage} from '../pages/first-page/first-page';
import { PostListPage} from '../pages/post-list-page/post-list-page';

import { BeautyPage } from '../pages/beauty-page/beauty-page';
import {  YogaPage } from '../pages/yoga-page/yoga-page';
import { FitnessPage } from '../pages/fitness-page/fitness-page';

import { Postpage} from '../pages/postpage/postpage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    PostListPage,

    BeautyPage,
    YogaPage,
    FitnessPage,
    Postpage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'top', tabsHideOnSubPages:'true'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    PostListPage,

    BeautyPage,
    YogaPage,
    FitnessPage,
    Postpage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
