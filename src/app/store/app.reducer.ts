import { ActionReducerMap } from '@ngrx/store'
import * as reducers from './reducers'
import {AppState} from "../interfaces/app-state.interface";

export const appReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducer,
  user: reducers.userReducer,
}

