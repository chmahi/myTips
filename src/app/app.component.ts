import { Component,  ViewChild, Pipe, PipeTransform } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AlertController, Nav, Platform, LoadingController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstPage  } from '../pages/first-page/first-page';
import { AdMob } from '@ionic-native/admob';
import { TipsService } from '../providers/tips-service';
import {Push, PushObject, PushOptions} from "@ionic-native/push";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  gform;
  gender;
  
  rootPage:any =  FirstPage;
   pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public alertCtrl: AlertController, public push: Push, public statusBar: StatusBar, public splashScreen: SplashScreen, public AdMob: AdMob, public tipsService: TipsService) {
    this.initializeApp();
    this.gform = new FormGroup({
    "gender": new FormControl({value: 'male', disabled: false})
});
    // used for an example of ngFor and navigation
  platform.ready().then(() => {
     let options = {
        adId: 'ca-app-pub-7071565575097936/4327122006',
        isTesting: false
      };
      // AdMob.createBanner(options).then(() => {
      //   AdMob.showBanner(8);
      // });
  })


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
      this.initPushNotification();
    });
  }
  saveSettings(){
  // this.tipsService.getGender(this.gender);
}
  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: "543595891066"
      },
      ios: {
        alert: "true",
        badge: false,
        sound: "true"
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      alert("device token -> " + data.registrationId);
      //TODO - send device token to server
    });

    pushObject.on('notification').subscribe((data: any) => {
      console.log('message', data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              //this.nav.push(DetailsPage, {message: data.message});
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
       // this.nav.push(DetailsPage, {message: data.message});
        console.log("Push notification clicked");
      }
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
