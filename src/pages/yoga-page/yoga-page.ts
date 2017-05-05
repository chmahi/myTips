import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';
import { FirstPage } from '../first-page/first-page';
import { SearchPage } from '../search-page/search-page';
/**
 * Generated class for the YogaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-yoga-page',
  templateUrl: 'yoga-page.html',
})
export class YogaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController ) {
  }
  openMenu(){
    this.menuCtrl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad YogaPage');
  }
  callPost(){
    //this.navCtrl.setRoot(FirstPage);
   // this.navCtrl.setRoot(Postpage)
    this.navCtrl.push( Postpage );
  }
   searchPage(){
    this.navCtrl.push( SearchPage );
  }
}
