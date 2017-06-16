import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipsService } from '../../providers/tips-service';
import { LoadingController,Platform } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';

/**
 * Generated class for the Favourite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class Favourite {
  favourites;
  categories;
  constructor(public navCtrl: NavController, public navParams: NavParams,public tipsService: TipsService, public loading: LoadingController) {
    this.loadFavourites();
    this.loadCategory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favourite');
  }


loadCategory(){
    let loader = this.loading.create({
    content: 'Getting latest entries...',
    });
    loader.present().then(() => {
     this.tipsService.loadCategory()
    .then(data => {
      this.categories = data;     
      loader.dismiss();
    });
   // loader.dismiss();
  });
  
}

  loadFavourites(){
    let loader = this.loading.create({
    content: 'Getting latest entries...',
    });
  loader.present().then(() => {
     this.tipsService.loadFavourites()
    .then(data => {
      this.favourites = data;
      this.favourites.reverse();
      loader.dismiss();
    });
   // loader.dismiss();
  });
  
}
   callPost(value){
    this.navCtrl.push( Postpage,{
      postValue:value
    });
  }
  getCategory(catVal){
    var nameret;
    this.categories.forEach(element => {
      if(element.id == catVal){
        nameret = element.name;
      }
    });
    return nameret;
  }
    renderContent(textVal){
    return textVal.slice(0,30)+"...";
  }
}
