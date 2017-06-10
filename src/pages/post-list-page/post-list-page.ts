import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Male } from '../male/male';
import {  Female } from '../female/female';
import {  All } from '../all/all';
/**
 * Generated class for the PostListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
// @Component({
//   selector: 'page-post-list-page',
//   templateUrl: 'post-list-page.html',
// })
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
export class TabIconTextContentPage {
  isAndroid: boolean = false;
}


@Component({
  template: `
    <ion-tabs preloadTabs="false" animation="none">
      <ion-tab tabTitle="All"  [root]="tab1"></ion-tab>
      <ion-tab tabTitle="Male"  [root]="tab2"></ion-tab>
       <ion-tab tabTitle="Female"  [root]="tab3"></ion-tab>
    </ion-tabs>`
  
})
export class PostListPage {
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.tab1 =  All;
     this.tab2 = Male;
     this.tab3 = Female;
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
  }


}
