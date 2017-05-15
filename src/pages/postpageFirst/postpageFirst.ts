import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search-page/search-page';
import { PostListPage } from '../post-list-page/post-list-page';
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
  selector: 'page-postpage-first',
  templateUrl: 'postpageFirst.html',
  providers: [TipsService]
})
export class PostpageFirst {
  public tip:any = [];
  constructor(public navCtrl: NavController, public tipsService: TipsService ) {
    this.loadTips();
    
    //this.postParam = navParams.get("postValue");
    // console.log(this.postParam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostpageFirst');
  }
   searchPage(){
    this.navCtrl.push( SearchPage );
  }
   
   PostListPage(){
    this.navCtrl.push( PostListPage );
  }
    loadTips(){
    this.tipsService.load()
    .then(data => {
      this.tip = data[0];
     
    });
  }
}
