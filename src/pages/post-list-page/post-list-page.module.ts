import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostListPage } from './post-list-page';

@NgModule({
  declarations: [
    PostListPage,
  ],
  imports: [
    IonicModule.forRoot(PostListPage),
  ],
  exports: [
    PostListPage
  ]
})
export class PostListPageModule {}
