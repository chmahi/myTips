import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search-page/search-page';
import { TipsService } from '../../providers/tips-service';
import { Http } from '@angular/http';
/**
 * Generated class for the Postpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-postpage',
  templateUrl: 'postpage.html',
  providers: [TipsService]
})
export class Postpage {
  public tip = [];
  public postParam:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public tipsService: TipsService ) {
    this.loadTips();
    this.postParam = navParams.get("postValue");
     console.log(this.postParam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Postpage');
  }
   searchPage(){
    this.navCtrl.push( SearchPage );
  }
    loadTips(){
    this.tipsService.load()
    .then(data => {
      this.tip = data[0];
    });
  }
}
