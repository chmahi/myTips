import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FitnessPage } from './fitness-page';

@NgModule({
  declarations: [
    FitnessPage,
  ],
  imports: [
    IonicModule.forRoot(FitnessPage),
  ],
  exports: [
    FitnessPage
  ]
})
export class FitnessPageModule {}
