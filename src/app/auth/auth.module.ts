import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthPageComponent } from './components/authPage/authPage.component';
import { AuthService } from './services/auth.service';
import { LoginEffect } from './store/effect/login.effect';
import { AuthReducer } from './store/reducers';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AuthPagePostsComponent } from './components/auth-page-posts/auth-page-posts.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'devs', component: AuthPageComponent },
  { path: 'devs/signup', component: AuthPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([LoginEffect]),
    ReactiveFormsModule,
    FontAwesomeModule,
    CarouselModule,
  ],
  declarations: [
    AuthPageComponent,
    LoginComponent,
    AuthPagePostsComponent,
    SignupComponent,
  ],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AuthModule {}
