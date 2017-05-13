import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostpageFirst } from './postpageFirst';

@NgModule({
  declarations: [
    PostpageFirst,
  ],
  imports: [
    IonicModule.forRoot(PostpageFirst),
  ],
  exports: [
    PostpageFirst
  ]
})
export class PostpageFirstModule {}
