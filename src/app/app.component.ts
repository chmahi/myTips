import { Component,  ViewChild, Pipe, PipeTransform } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AlertController, Nav, Platform, LoadingController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstPage  } from '../pages/first-page/first-page';
import { AdMob } from '@ionic-native/admob';
import { TipsService } from '../providers/tips-service';
import {Push, PushObject, PushOptions} from "@ionic-native/push";
import { Postpagenotify } from '../pages/postpagenotify/postpagenotify';

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
      AdMob.createBanner(options).then(() => {
        AdMob.showBanner(8);
      });
      this.initPushNotification();
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
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#84b722');
      this.splashScreen.hide();
      
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
      this.tipsService.pushSetup(data.registrationId);
      //alert("device token -> " + data.registrationId);
      //TODO - send device token to server
    });

    pushObject.on('notification').subscribe((data: any) => {
     // alert('message is:'+ JSON.stringify(data));
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: data.title,
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              // var newObj = data.additionalData;
              // newObj.push(
              //   {title: data.title}
              // );
              
            this.nav.push(Postpagenotify, {postValue:data.additionalData, title:data.title});
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
       // this.nav.push(DetailsPage, {message: data.message});
      //  var newObj = data.additionalData;
      //         newObj.push(
      //           {title: data.title}
      //         );
              
           // this.nav.push(Postpage, {postValue:newObj});
       this.nav.push(Postpagenotify, {postValue:data.additionalData, title:data.title});
      }
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
