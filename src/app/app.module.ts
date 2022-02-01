import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule,
    GlobalFeedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
