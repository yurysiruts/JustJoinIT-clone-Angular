import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { feedComponent } from './components/feed/feed.component';

@NgModule({
  imports: [CommonModule],
  declarations: [feedComponent],
  exports: [feedComponent],
})
export class FeedModule {}
