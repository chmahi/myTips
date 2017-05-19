import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoadPage } from './load-page';

@NgModule({
  declarations: [
    LoadPage,
  ],
  imports: [
    IonicModule.forRoot(LoadPage),
  ],
  exports: [
    LoadPage
  ]
})
export class LoadPageModule {}
