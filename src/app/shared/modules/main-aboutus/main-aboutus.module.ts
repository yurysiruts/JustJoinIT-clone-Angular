import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainAboutusComponent } from './main-aboutus.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule],
  declarations: [MainAboutusComponent],
  exports: [MainAboutusComponent],
})
export class MainAboutUsModule {}
