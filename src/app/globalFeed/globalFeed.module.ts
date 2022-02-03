import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MainFooterModule } from '../shared/modules/main-footer/main-footer.module';
import { MainCustomersModule } from '../shared/modules/main-customers/main-customers.module';
import { MainStepsModule } from '../shared/modules/main-steps/main-steps.module';
import { MainStartModule } from '../shared/modules/main-start/main-start.module';
import { MainAboutUsModule } from '../shared/modules/main-aboutus/main-aboutus.module';
import { MainBenefitsModule } from '../shared/modules/main-benefits/main-benefits.module';

const routes: Routes = [{ path: '', component: GlobalFeedComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    MainFooterModule,
    MainCustomersModule,
    MainStepsModule,
    MainStartModule,
    MainAboutUsModule,
    MainBenefitsModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
