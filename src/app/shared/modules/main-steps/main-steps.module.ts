import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainStepsComponent } from './main-steps.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule],
  declarations: [MainStepsComponent],
  exports: [MainStepsComponent],
})
export class MainStepsModule {}
