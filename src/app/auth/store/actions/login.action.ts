import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ActionTypesAuth } from '../actionTypes';

export const loginAction = createAction(
  ActionTypesAuth.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypesAuth.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypesAuth.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
