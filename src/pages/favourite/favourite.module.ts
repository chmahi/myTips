import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Favourite } from './favourite';

@NgModule({
  declarations: [
    Favourite,
  ],
  imports: [
    IonicModule.forRoot(Favourite),
  ],
  exports: [
    Favourite
  ]
})
export class FavouriteModule {}
