import {Usuario} from "../models/usuario.model";

export interface UsersState {
  users: Usuario[],
  loaded: boolean,
  loading: boolean,
  error: any
}
