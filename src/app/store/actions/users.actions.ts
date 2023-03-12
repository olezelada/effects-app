import {createAction, props} from '@ngrx/store'
import {Usuario} from "../../models/usuario.model";

export const loadUsers = createAction('[Users] load users');

export const loadUsersSuccess = createAction(
  '[Users] load user Success',
  props<{ users: Usuario[] }>()
);

export const loadUsersFail = createAction(
  '[Users] load user Fail',
  props<{ payload: any }>()
);
