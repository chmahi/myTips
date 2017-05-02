import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BeautyPage } from './beauty-page';

@NgModule({
  declarations: [
    BeautyPage,
  ],
  imports: [
    IonicModule.forRoot(BeautyPage),
  ],
  exports: [
    BeautyPage
  ]
})
export class BeautyPageModule {}
