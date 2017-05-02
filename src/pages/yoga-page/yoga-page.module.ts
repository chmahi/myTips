import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { YogaPage } from './yoga-page';

@NgModule({
  declarations: [
    YogaPage,
  ],
  imports: [
    IonicModule.forRoot(YogaPage),
  ],
  exports: [
    YogaPage
  ]
})
export class YogaPageModule {}
