import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Postpagenotify } from './postpagenotify';

@NgModule({
  declarations: [
    Postpagenotify,
  ],
  imports: [
    IonicModule.forRoot(Postpagenotify),
  ],
  exports: [
    Postpagenotify
  ]
})
export class PostpagenotifyModule {}
