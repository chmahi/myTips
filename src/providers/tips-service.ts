import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Device} from '@ionic-native/device';
/*
  Generated class for the TipsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TipsService {
  data;
  cate;
 public currentCategory;
  reload = false;
  public genderServ = 'male';
  constructor(public http: Http,  private device: Device) {
    console.log('Hello TipsService Provider');
  }
  load() {
  if (this.data && this.reload == false) {
    // already loaded data
    this.reload = true;
    return Promise.resolve(this.data);
  }else{

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/all/tips')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        // this.data = data;   
        this.data = data;    
        resolve(this.data);
      });
  });
  }
}

  filterGender(dataVal){ 
      var serve = this.genderServ;
      console.log(this.genderServ);
      return dataVal.filter((tip) => {
        if(tip.genderSpecific.length == 1){
          if(tip.genderSpecific[0].toLowerCase().indexOf(serve.toLowerCase()) > -1){
            console.log('tester');
            return tip;            
          }
        }else{
          return tip;
        }
      });  
  }

likeTip(tipId, userId) {
 
  // don't have the data yet
  return new Promise(resolve => {
  
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.post('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/like/'+tipId+'/'+userId, '')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });

}

pushSetup(deviceTokenVal) {
 
  // don't have the data yet
  return new Promise(resolve => {
    var device = this.getDeviceDetails();
    var body = {
      userId: '',
      deviceToken: deviceTokenVal
    }
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.post('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/user/map', body)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });

}

getDeviceDetails(){    
//  alert(this.device.uuid);
  return this.device.uuid; 
}


favTip(tipId, userId) {
 
 
  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
   
    this.http.post('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/favorite/'+tipId+'/'+userId,'')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;        
        resolve(this.data);
      });
  });

}


  filterItems(searchTerm, category){ 
      return this.data.filter((tip) => {
          if(tip.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
            return tip;
          }
      });  
  }
  getGender(gval){
     //if(this.genderServ == 'female'){
        this.genderServ = gval;
        this.reload = false;
     //}
     //this.filterGender(gval);
   }
getcurrentCategory(currentcatg){
  this.currentCategory = currentcatg;
}

     loadCategory() {
       console.log('category');
  if (this.cate) {
    // already loaded data
    return Promise.resolve(this.cate);
  }else{

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/category/list/all')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        // this.data = data;   
        this.cate = data;    
        resolve(this.cate);
      });
  });
  }
}

}
 