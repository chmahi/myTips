import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';
import { FirstPage } from '../first-page/first-page';
import { SearchPage } from '../search-page/search-page';
import { TipsService } from '../../providers/tips-service';
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
  providers: [TipsService]
})
export class YogaPage {
  tips;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService ) {
     this.loadTips();
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
  loadTips(){
    this.tipsService.load()
    .then(data => {
      this.tips = data;
    });
  }
}
