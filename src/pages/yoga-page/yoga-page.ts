import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';
import { SearchPage } from '../search-page/search-page';
import { PostpageFirst } from '../postpageFirst/postpageFirst';
import { TipsService } from '../../providers/tips-service';
/**
 * Generated class for the YogaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-yoga-page',
  templateUrl: 'yoga-page.html'
})
export class YogaPage {
  tips;   
  public search = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService ) {
  this.loadTips();
  }
  openMenu(){
    this.menuCtrl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad YogaPage');
  }
  callPost(value){
    //this.navCtrl.setRoot(FirstPage);
   // this.navCtrl.setRoot(Postpage)
    this.navCtrl.push( Postpage,{
      postValue:value
    });
  }
   searchPage(){
    this.navCtrl.push( SearchPage );
  }
  showSearch(){
     this.search = true;
  }
  hideSearch(){
     this.search = false;
  }
   PostpageFirst(){
    console.log(this.navCtrl);   
  }
  loadTips(){
    this.tipsService.load()
    .then(data => {
      this.tips = data;
    });
  }
 
}
