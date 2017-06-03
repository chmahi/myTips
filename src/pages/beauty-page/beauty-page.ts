import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';
import { PostpageFirst } from '../postpageFirst/postpageFirst';
import { TipsService } from '../../providers/tips-service';
import { LoadingController, Platform } from 'ionic-angular';
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
  searchTerm;
  category;
  public search = false; 
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService, public loading: LoadingController ) {
  this.loadTips();
    platform.ready().then(()=>{
       platform.registerBackButtonAction(()=>this.myHandlerFunction());
   })
  }

  myHandlerFunction(){    
     this.navCtrl.push( PostpageFirst );
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeautyPage');
  }

  
  showSearch(){
     this.search = true;
  }
  renderContent(textVal){
    return textVal.slice(0,80)+"...";
  }
 hideSearch(){
     this.search = false;
     this.searchTerm = "";
     this.setFilteredItems();
  }
  public setFilteredItems() { 
        this.tips = this.tipsService.filterItems(this.searchTerm, this.category); 
  }
   loadTips(){

    let loader = this.loading.create({
    content: 'Getting latest entries...',
    });
  loader.present().then(() => {
     this.tipsService.load()
    .then(data => {
      this.tips = data;
      this.tips.reverse();
      loader.dismiss();
    });
   // loader.dismiss();
  });
  
  };
  callPost(value){
    //this.navCtrl.setRoot(FirstPage);
   // this.navCtrl.setRoot(Postpage)
    this.navCtrl.push( Postpage,{
      postValue:value
    });
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
