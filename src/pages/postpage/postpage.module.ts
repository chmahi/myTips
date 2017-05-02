import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Postpage } from './postpage';

@NgModule({
  declarations: [
    Postpage,
  ],
  imports: [
    IonicModule.forRoot(Postpage),
  ],
  exports: [
    Postpage
  ]
})
export class PostpageModule {}
