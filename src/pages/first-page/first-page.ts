import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostListPage} from '../post-list-page/post-list-page';
import { TipsService } from '../../providers/tips-service';

/**
 * Generated class for the FirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-first-page',
  templateUrl: 'first-page.html',
})


export class FirstPage {
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
   secondPage(){
    this.navCtrl.push( PostListPage );
  }

}
