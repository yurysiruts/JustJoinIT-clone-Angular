import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainCustomersComponent } from './main-customers.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule],
  declarations: [MainCustomersComponent],
  exports: [MainCustomersComponent],
})
export class MainCustomersModule {}
