import {Action, createReducer, on} from '@ngrx/store'
import {loadUsers, loadUsersFail, loadUsersSuccess} from '../actions'
import {UsersState} from '../../interfaces'


export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _usersReducer = createReducer(usersInitialState,
  on(loadUsers, state => ({...state, loading: true})),
  on(loadUsersSuccess, (state, {users}) => ({
      ...state,
      loading: false,
      loaded: true,
      users: [...users]
    })
  ),
  on(loadUsersFail, (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    })
  )
);

export function usersReducer(state: UsersState = usersInitialState, action: Action) {
  return _usersReducer(state, action);
}

