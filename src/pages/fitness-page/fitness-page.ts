import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SearchPage } from '../search-page/search-page';
import { Postpage } from '../postpage/postpage';
import { TipsService } from '../../providers/tips-service';
import { LoadingController } from 'ionic-angular';

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
  public search = false;   
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService,  public loading: LoadingController ) {
  this.loadTips();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPage');
  }
   searchPage(){
    this.navCtrl.push( SearchPage );
  };
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
  
  };
}
