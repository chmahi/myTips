import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
import { PostpageFirst } from '../pages/postpageFirst/postpageFirst';
import { SearchPage } from '../pages/search-page/search-page';
import { TipsService } from '../providers/tips-service';
import { LoadPage } from '../pages/load-page/load-page';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';

// import { SliderPage } from '../pages/slider-page/slider-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    PostListPage,
    BeautyPage,
    YogaPage,
    FitnessPage,
    Postpage,
    SearchPage,
    ParallaxHeader,
    PostpageFirst,
    LoadPage,
    // SliderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    Postpage,
    SearchPage,
    PostpageFirst,
    LoadPage,
    // SliderPage
  ],
  providers: [
    StatusBar,
    TipsService,
    SplashScreen,
    SocialSharing, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}