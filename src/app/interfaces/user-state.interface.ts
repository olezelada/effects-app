import {Usuario} from "../models/usuario.model";

export interface UserState {
  id      : string | null;
  user    : Usuario | null;
  loaded  : boolean;
  loading : boolean;
  error   : any
}
