import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
 import { Device } from '@ionic-native/device';
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
import { TipsService } from '../providers/tips-service';
import { LoadPage } from '../pages/load-page/load-page';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';

import { Filter } from '../pipes/filter';
 import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
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
    ParallaxHeader,
    PostpageFirst,
    LoadPage,
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
    FirstPage,
    PostListPage,
    BeautyPage,
    YogaPage,
    FitnessPage,
    Postpage,
    PostpageFirst,
    LoadPage,
    // SliderPage
  ],
  providers: [
    StatusBar,
    TipsService,
    SplashScreen,
    SocialSharing, 
    Device,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}