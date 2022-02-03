import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainStartComponent } from './main-start.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule],
  declarations: [MainStartComponent],
  exports: [MainStartComponent],
})
export class MainStartModule {}
