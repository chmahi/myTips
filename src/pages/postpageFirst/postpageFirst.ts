import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search-page/search-page';
import { PostListPage } from '../post-list-page/post-list-page';
import { TipsService } from '../../providers/tips-service';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
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
  @ViewChild(Slides) slides: Slides;
  public tips = [];  
   mySlideOptions = {
   pager:true
  };
  
  constructor(public navCtrl: NavController, public tipsService: TipsService, public loading: LoadingController, private sharingVar: SocialSharing ) {
    this.loadTips();
    
    //this.postParam = navParams.get("postValue");
    // console.log(this.postParam);
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
    console.log('ionViewDidLoad PostpageFirst');
  }
  
   searchPage(){
    this.navCtrl.push( SearchPage );
  }
   
  PostListPage(){
    this.navCtrl.pop();
    this.navCtrl.push( PostListPage );
  }
  loadTips(){

    let loader = this.loading.create({
    content: 'Getting latest entries...',
    });
  loader.present().then(() => {
     this.tipsService.load()
    .then(data => {
      this.tips = data;  
      loader.dismiss();
      this.slides.slideTo(2, 50);
    });
    //;
  });
  
  }
}
