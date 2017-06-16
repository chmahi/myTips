import { Component, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Postpage } from '../postpage/postpage';
import { PostpageFirst } from '../postpageFirst/postpageFirst';
import { TipsService } from '../../providers/tips-service';
import { LoadingController,Platform } from 'ionic-angular';
import { Filter } from '../../pipes/filter';
import { CategoryList } from '../category-list/category-list';
/**
 * Generated class for the YogaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-female',
  templateUrl: 'female.html'
})
export class Female {
  tips;   
  searchTerm = "";
  category = "";
  public search = false;
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public tipsService: TipsService, public loading: LoadingController ) {
  this.loadTips();
  this.category =  this.tipsService.currentCategory;
   console.log(this.tipsService.currentCategory + 'beauty');
  platform.ready().then(()=>{
       platform.registerBackButtonAction(()=>this.myHandlerFunction());
   })
  }
   myHandlerFunction(){    
     this.navCtrl.push( CategoryList );
    };
  openMenu(){
    this.menuCtrl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Female');
  }
  callPost(value){
    //this.navCtrl.setRoot(FirstPage);
   // this.navCtrl.setRoot(Postpage)
    this.navCtrl.push( Postpage,{
      postValue:value
    });
  }
  

  renderContent(textVal){
    return textVal.slice(0,80)+"...";
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
      this.tips = this.filterGender(data);
      this.tips.reverse();
      loader.dismiss();
    });
   // loader.dismiss();
  });
  
}
 filterGender(dataVal){ 
      var serve = 'female';
      return dataVal.filter((tip) => {
        if(tip.genderSpecific.length == 1){
          if(tip.genderSpecific[0].toLowerCase() == serve.toLowerCase()){
            return tip;            
          }
        }else if(tip.genderSpecific.length == 2 || tip.genderSpecific.length == 0 ){
          
          return tip;
        }
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
    } else {
      return image[0];
    }
  }


backToCategory(){
  this.navCtrl.push( CategoryList );
}
}
