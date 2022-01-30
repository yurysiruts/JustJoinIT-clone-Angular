import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { ActionTypesAuth } from '../actionTypes';

export const signUpAction = createAction(
  ActionTypesAuth.SIGNUP,
  props<{ request: RegisterRequestInterface }>()
);

export const signUpActionSuccess = createAction(ActionTypesAuth.SIGNUP_SUCCESS);

export const signUpActionFailure = createAction(ActionTypesAuth.SIGNUP_FAILURE);
