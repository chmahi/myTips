import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PostpageFirst } from '../postpageFirst/postpageFirst';
// import { SliderPage } from '../slider-page/slider-page';
import { TipsService } from '../../providers/tips-service';
import { LoadPage } from '../load-page/load-page';

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
   id;  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     var temp = this;
      var id = setInterval(function() {
      temp.navCtrl.push( LoadPage );
      temp.navCtrl.push( PostpageFirst );
      clearInterval(id);
    }, 2000);
    
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  

postpageFirst(){
 // clearInterval(this.id);
  this.navCtrl.push( LoadPage );
  this.navCtrl.push( PostpageFirst );
}

  // setInterval(function() {
  //   console.log("time on");
  // }, 3000);
}
