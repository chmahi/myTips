import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeautyPage } from '../beauty-page/beauty-page';
import {  YogaPage } from '../yoga-page/yoga-page';
import { FitnessPage } from '../fitness-page/fitness-page';
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
    <ion-tabs>
      <ion-tab tabTitle="Yoga"  [root]="tab1"></ion-tab>
      <ion-tab tabTitle="Beauty"  [root]="tab2"></ion-tab>
       <ion-tab tabTitle="Fitness"  [root]="tab3"></ion-tab>
    </ion-tabs>`
  
})
export class PostListPage {
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.tab1 = YogaPage;
     this.tab2 = BeautyPage;
     this.tab3 = FitnessPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
  }

}
