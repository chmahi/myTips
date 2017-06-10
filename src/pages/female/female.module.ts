import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Female } from './female';

@NgModule({
  declarations: [
    Female,
  ],
  imports: [
    IonicModule.forRoot(Female, {
       menuType: 'push',
    }),
  ],
  exports: [
    Female
  ]
})
export class FemaleModule {}
