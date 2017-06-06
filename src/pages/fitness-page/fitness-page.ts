import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';
import { PostpageFirst } from '../postpageFirst/postpageFirst';
import { TipsService } from '../../providers/tips-service';
import { LoadingController,Platform } from 'ionic-angular';

/**
 * Generated class for the FitnessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fitness-page',
  templateUrl: 'fitness-page.html',
})
export class FitnessPage {
  tips; 
  searchTerm;
  category;
  deviceId;
  public search = false;   
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService,  public loading: LoadingController ) {
  this.loadTips();
  platform.ready().then(()=>{
       platform.registerBackButtonAction(()=>this.myHandlerFunction());
   })
  }

  myHandlerFunction(){    
     this.navCtrl.push( PostpageFirst );
    };
  renderContent(textVal){
    return textVal.slice(0,80)+"...";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPage');
  }
 
  showSearch(){
     this.search = true;
  }
 hideSearch(){
     this.search = false;
     this.searchTerm = "";
     this.setFilteredItems();
  }
  public setFilteredItems() { 
        this.tips = this.tipsService.filterItems(this.searchTerm, this.category); 
  }
 
  callPost(value){
    //this.navCtrl.setRoot(FirstPage);
   // this.navCtrl.setRoot(Postpage)
    this.navCtrl.push( Postpage,{
      postValue:value
    });
  };
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
    });
   // loader.dismiss();
  });
  
};

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
