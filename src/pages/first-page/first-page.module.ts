import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FirstPage } from './first-page';

@NgModule({
  declarations: [
    FirstPage,
  ],
  imports: [
    IonicModule.forRoot(FirstPage),
  ],
  exports: [
    FirstPage
  ]
})
export class FirstPageModule {}
