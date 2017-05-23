import { Component,  ViewChild, Pipe, PipeTransform } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {Nav, Platform, LoadingController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstPage  } from '../pages/first-page/first-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  gform;
  gender;
  
  rootPage:any =  FirstPage;

   pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.gform = new FormGroup({
    "gender": new FormControl({value: 'male', disabled: false})
});
    // used for an example of ngFor and navigation
  
  }
    doSubmit(event) {
    console.log('Submitting form', this.gform.value);
    event.preventDefault();
  }
    initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
