import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { LoginEffect } from './store/effect/login.effect';
import { AuthReducer } from './store/reducers';

const routes: Routes = [{ path: 'devs', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([LoginEffect]),
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AuthModule {}
