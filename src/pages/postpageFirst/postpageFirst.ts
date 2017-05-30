import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostListPage } from '../post-list-page/post-list-page';
import { TipsService } from '../../providers/tips-service';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
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
  iconValue=true;
  deviceId;
  constructor(public navCtrl: NavController, public tipsService: TipsService, public loading: LoadingController, private sharingVar: SocialSharing, private youtube: YoutubeVideoPlayer ) {
    this.loadTips();
    this.deviceId = tipsService.getDeviceDetails();
   
    //this.postParam = navParams.get("postValue");
    // console.log(this.postParam);
  }
   otherShare(tip){
    this.sharingVar.share("My Tips",tip.title,tip.images[0],"https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=en")
    .then(()=>{
        
      },
      ()=>{
        
      })
 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostpageFirst');
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
      console.log("this is loading");
      var id = setInterval(function() {
         
        clearInterval(id);
      }, 3000);
     
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
    console.log(videoId[0]);
    
    // if(videoId.length != 0){
      this.youtube.openVideo(videoId[0]);
    // }
  
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
