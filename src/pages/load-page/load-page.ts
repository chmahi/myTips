import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-load-page',
  templateUrl: 'load-page.html',
})
export class LoadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadPage');
  }

}
