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
   deviceId;
   mySlideOptions = {
   pager:true
  };
  
  constructor(public navCtrl: NavController,  public navParams: NavParams, public tipsService: TipsService, private sharingVar: SocialSharing ) {
    this.loadTips();
    
    this.postParam = navParams.get("postValue");
     console.log(this.postParam);
  }
    otherShare(tip){
     this.sharingVar.share("My Tips",tip.title,tip.images[0],"https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=en")
    .then(()=>{
       
      },
      ()=>{
        
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

  likePost(id){
    this.tipsService.likeTip(id,this.deviceId);
  }
  favoritePost(id){
    this.tipsService.favTip(id,this.deviceId);
  }
  
}
