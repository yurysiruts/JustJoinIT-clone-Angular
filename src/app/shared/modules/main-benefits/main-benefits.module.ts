import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainBenefitsComponent } from './main-benefits.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule],
  declarations: [MainBenefitsComponent],
  exports: [MainBenefitsComponent],
})
export class MainBenefitsModule {}
