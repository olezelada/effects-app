import {createAction, props} from '@ngrx/store'
import {Usuario} from "../../models/usuario.model";

export const loadUser = createAction(
  '[Users] load user',
        props<{id: string}>()
  );

export const loadUserSuccess = createAction(
  '[Users] load user Success',
  props<{ user: Usuario}>()
);

export const loadUserFail = createAction(
  '[Users] load user Fail',
  props<{ payload: any }>()
);
