import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryList } from '../category-list/category-list';
import { TipsService } from '../../providers/tips-service';
import { Http } from '@angular/http';
import { LoadingController,Platform, ToastController } from 'ionic-angular';
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
  id;
  valNum = 0;
   mySlideOptions = {
   pager:true
  };
  iconValue=true;
  deviceId;
  constructor(public platform: Platform, public navCtrl: NavController, public tipsService: TipsService, public loading: LoadingController, 
  private sharingVar: SocialSharing,
    private youtube: YoutubeVideoPlayer, public toastCtrl: ToastController
    ) {
    this.loadTips();
    this.deviceId = tipsService.getDeviceDetails();
   
    platform.ready().then(()=>{
       platform.registerBackButtonAction(()=>this.myHandlerFunction());
   })
  }

  myHandlerFunction(){    
    if(this.valNum == 0){
      let toast = this.toastCtrl.create({
        message: 'Double Click back button to exit My Tips!',
        duration: 2000,
        cssClass:'Toast'
      });
      toast.present();
      this.valNum = 1;
      var temp = this;
      this.id = setInterval(function() {
      temp.valNum = 0;
      clearInterval(temp.id);
    }, 1000);
    }else{
    this.platform.exitApp();
    }
    };
   otherShare(tip){
   
   
    this.sharingVar.share("My Tips",tip.title,tip.images[0],"https://play.google.com/store/apps/details?id=com.gleed.mytips&hl=en")
    .then(()=>{
       
      },
      ()=>{
       
      })
 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostpageFirst');
  }

   
  PostListPage(){
    
    this.navCtrl.push( CategoryList );
  }


 onPageWillEnter() {
    this.loadTips();
   }
  loadTips(){

    let loader = this.loading.create({
    content: 'Getting latest entries...',
  });
 
  loader.present().then(() => {
     this.tipsService.load()
    .then(data => {
      // this.tips = data;  
      this.tips = this.tipsService.filterGender(data);
      this.tips.reverse();
      
      loader.dismiss();
      console.log("this is loading");
      let toast = this.toastCtrl.create({
        message: 'SWIPE RIGHT for more tips',
        duration: 4000,
        position: 'middle',
        showCloseButton: true,
        closeButtonText: 'Ok',
        dismissOnPageChange: true,
        cssClass:'Toast'
      });
      toast.present();
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
    // if(videoId.length != 0){
      this.youtube.openVideo(videoId);
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

  
 gender(data,gen){
  if(data.length == 0 || data.length == 2){
    return true;
  }
  else if(data.length == 1){
    if(data[0] == gen){
      return true;
    }
    else{
      return false;
    }
  }
}

}
