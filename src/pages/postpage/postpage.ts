import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostListPage } from '../post-list-page/post-list-page';
import { TipsService } from '../../providers/tips-service';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
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
   tip;
   iconValue = true;
   deviceId;
   mySlideOptions = {
   pager:true
  };
  
  constructor(public navCtrl: NavController,  public navParams: NavParams, public tipsService: TipsService, private youtube: YoutubeVideoPlayer,  public loading: LoadingController, private sharingVar: SocialSharing ) {
    this.loadTips();
    
    this.tip = navParams.get("postValue");
     console.log(this.tip);
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
  
   PostListPage(){
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
      // this.slides.slideTo(2, 50);
    });
    //;
  });
  
}

 likePost(id, listlike,numVal){   
   if(!this.deviceId){
     this.deviceId = "12345";
   }
   if(numVal == 1){
      listlike.forEach(element => {
        if(element.userId == this.deviceId){
          listlike.splice(listlike.indexOf(element), 1);
        }
      });
    }else{
       listlike.push({userId: this.deviceId});
    }
    this.tipsService.likeTip(id,this.deviceId)
    .then(data => {
        
    });
  }

  favoritePost(id, listfav, numVal){
    if(!this.deviceId){
     this.deviceId = "12345";
   }

    if(numVal == 1){
      listfav.forEach(element => {
        if(element.userId == this.deviceId){
          listfav.splice(listfav.indexOf(element), 1);
        }
      });
    }else{
       listfav.push({userId: this.deviceId});
    }

        
    this.tipsService.favTip(id,this.deviceId)
    .then(data => {
        
    });
  }

  playVideo(videoId) {
    this.youtube.openVideo(videoId[0]);
  }
  
  iconLike(tipList): any{
    if(!this.deviceId){
     this.deviceId = "12345";
   }    
    return tipList.filter(tip => tip.userId == this.deviceId);
  }
  iconFav(tipList): any{
    if(!this.deviceId){
     this.deviceId = "12345";
   }    
    return tipList.filter(tip => tip.userId == this.deviceId);
  }
  
  changeDate(dateVal){
    let b = new Date(dateVal);
    let c = b.toDateString();
    let d = c.split(' ');
    return d[1] +" "+ d[2] +" "+ d [3];
  }
  
 changeImage(image)
  {
    if (image.length == 0){
      return "assets/images/noImage.png";
    } else{
      return image[0];
    }
  }
}
