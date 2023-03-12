import {Action, createReducer, on} from '@ngrx/store'
import {loadUser, loadUserFail, loadUserSuccess} from '../actions'
import {UserState} from '../../interfaces'


export const userInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
}

const _userReducer = createReducer(userInitialState,

  on(loadUser, (state, {id}) => ({
    ...state,
    loading: true,
    id: id
  })),

  on(loadUserSuccess, (state, {user}) => ({
      ...state,
      loading: false,
      loaded: true,
      user: {...user}
    })
  ),

  on(loadUserFail, (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      user: null,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message,
      }
    })
  )
);

export function userReducer(state: UserState = userInitialState, action: Action) {
  return _userReducer(state, action);
}

