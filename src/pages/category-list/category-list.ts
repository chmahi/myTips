import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostListPage } from '../post-list-page/post-list-page';
import { TipsService } from '../../providers/tips-service';
import { LoadingController,Platform } from 'ionic-angular';
/**
 * Generated class for the CategoryList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryList {
categories;
currentCategory;
  constructor(public navCtrl: NavController, public navParams: NavParams, public tipsService: TipsService, public loading: LoadingController) {
    this.loadCategory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryList');
  }

    PostListPage(){
   
    this.navCtrl.push( PostListPage );
  }

     loadCategory(){

    let loader = this.loading.create({
    content: 'Getting latest entries...',
    });
  loader.present().then(() => {
     this.tipsService.loadCategory()
    .then(data => {
      this.categories = data;
      this.categories.reverse();
      loader.dismiss();
    });
   // loader.dismiss();
  });
  
}

setCategory(categ){
  this.tipsService.currentCategory = categ;
   this.navCtrl.push( PostListPage );
  console.log(this.tipsService.currentCategory);
}

}
