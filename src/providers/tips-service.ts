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
  constructor(public http: Http, private device: Device) {
    console.log('Hello TipsService Provider');
  }
  load() {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }else{

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('https://health-tips-backend.herokuapp.com/all/tips')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });
  }
}

likeTip(tipId, userId) {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }else{

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.post('/tips/like/'+tipId+'/'+userId, '')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });
  }
}

getDeviceDetails(){    
      return this.device.uuid; 
}


favTip(tipId, userId) {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }else{

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.post('/tips/favourite/'+tipId+'/'+userId, '')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });
  }
}


  filterItems(searchTerm, category){ 
      return this.data.filter((tip) => {
          if(tip.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
            return tip;
          }
      });  
  }
}
