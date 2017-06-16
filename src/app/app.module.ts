import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
 import { Device } from '@ionic-native/device';
 import {Push} from "@ionic-native/push";
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage} from '../pages/first-page/first-page';
import { CategoryList} from '../pages/category-list/category-list';
import { PostListPage} from '../pages/post-list-page/post-list-page';
import { Favourite } from '../pages/favourite/favourite';

import { Male } from '../pages/male/male';
import {  Female } from '../pages/female/female';
import { All } from '../pages/all/all';
import { Postpage} from '../pages/postpage/postpage';
import { Postpagenotify } from '../pages/postpagenotify/postpagenotify';

import { PostpageFirst } from '../pages/postpageFirst/postpageFirst';
import { TipsService } from '../providers/tips-service';
import { LoadPage } from '../pages/load-page/load-page';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';


import { Filter } from '../pipes/filter';
 import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
 import { AdMob } from '@ionic-native/admob'
// import { SliderPage } from '../pages/slider-page/slider-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    CategoryList,
    Male,
    Female,
    PostListPage,
    Postpagenotify,
     All,
    Postpage,
    ParallaxHeader,
    PostpageFirst,
    LoadPage,
    Favourite,
    // pipes
    Filter
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
    PostListPage,
    FirstPage,
    CategoryList,
    Postpagenotify,
    Male,
    Female,
     All,
    Postpage,
    PostpageFirst,
    LoadPage,
    Favourite
    // SliderPage
  ],
  providers: [
    StatusBar,
    TipsService,
    SplashScreen,
    SocialSharing, 
    Device,
    YoutubeVideoPlayer,
    AdMob,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}