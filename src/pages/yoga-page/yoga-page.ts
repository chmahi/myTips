import { Component, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';
import { SearchPage } from '../search-page/search-page';
import { PostpageFirst } from '../postpageFirst/postpageFirst';
import { TipsService } from '../../providers/tips-service';
import { LoadingController } from 'ionic-angular';
import { Filter } from '../../pipes/filter';
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
  searchTerm = "";
  category = "Yoga";
  public search = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService, public loading: LoadingController ) {
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
     this.searchTerm = "";
     this.setFilteredItems();
  }
   PostpageFirst(){
    console.log(this.navCtrl);   
  }
 public setFilteredItems() { 
        this.tips = this.tipsService.filterItems(this.searchTerm, this.category); 
  }
  // filterItems(searchTerm){ 
  //     return this.tips.filter((tip) => {
  //         return tip.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //     });  
  // }
   loadTips(){

    let loader = this.loading.create({
    content: 'Getting latest entries...',
    });
  loader.present().then(() => {
     this.tipsService.load()
    .then(data => {
      this.tips = data;
      loader.dismiss();
    });
   // loader.dismiss();
  });
  
  }
  
  changeDate(dateVal){
    let b = new Date(dateVal);
    let c = b.toDateString();
    let d = c.split(' ');
    return d[1] +" "+ d[2] +" "+ d [3];
  }
}
