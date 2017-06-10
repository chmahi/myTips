import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { All } from './all';

@NgModule({
  declarations: [
    All,
  ],
  imports: [
    IonicModule.forRoot(All),
  ],
  exports: [
    All
  ]
})
export class AllModule {}
