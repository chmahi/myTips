import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipsService } from '../../providers/tips-service';
import { LoadingController,Platform } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public tipsService: TipsService, public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favourite');
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

}
