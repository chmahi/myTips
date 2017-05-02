import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostListPage } from './post-list-page';
import { BeautyPage } from './beauty-page';
import {  YogaPage } from './yoga-page';
import { FitnessPage } from './fitness-page';
@NgModule({
  declarations: [
    PostListPage,
    BeautyPage,
    YogaPage,
    FitnessPage 
  ],
  imports: [
    IonicModule.forRoot(PostListPage),
  ],
  exports: [
    PostListPage,
    BeautyPage,
    YogaPage,
    FitnessPage 
  ]
})
export class PostListPageModule {}
