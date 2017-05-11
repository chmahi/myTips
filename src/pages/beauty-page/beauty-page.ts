import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SearchPage } from '../search-page/search-page';
import { Postpage } from '../postpage/postpage';
import { TipsService } from '../../providers/tips-service';
/**
 * Generated class for the BeautyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-beauty-page',
  templateUrl: 'beauty-page.html',
})
export class BeautyPage {

  tips;   
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService ) {
  this.loadTips();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeautyPage');
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
  callPost(value){
    //this.navCtrl.setRoot(FirstPage);
   // this.navCtrl.setRoot(Postpage)
    this.navCtrl.push( Postpage,{
      postValue:value
    });
  }
}
