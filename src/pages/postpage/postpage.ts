import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search-page/search-page';
import { PostListPage } from '../post-list-page/post-list-page';
import { TipsService } from '../../providers/tips-service';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
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

  public tips = [];
   slides = [1,2,3,4];
   postParam;
   mySlideOptions = {
   pager:true
  };
  
  constructor(public navCtrl: NavController,  public navParams: NavParams, public tipsService: TipsService, private sharingVar: SocialSharing ) {
    this.loadTips();
    
    this.postParam = navParams.get("postValue");
     console.log(this.postParam);
  }
    otherShare(){
    this.sharingVar.share("Genral Share Sheet",null/*Subject*/,null/*File*/,"http://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Postpage');
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
      this.tips = data;
  
    });
  }
  
}
