import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {loadUsers, loadUsersFail, loadUsersSuccess} from "../actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {UsuarioService} from "../../services/usuario.service";
import {of} from "rxjs";


@Injectable()
export class UsersEffects {

  constructor(private _action$: Actions,
              private _userService: UsuarioService) {}

  public loadUsers$ = createEffect(
    () => this._action$.pipe(
      ofType( loadUsers),
      mergeMap(
        () => this._userService.getUsers()
          .pipe(
            map( users => loadUsersSuccess({ users })),
            catchError( err => of(loadUsersFail({payload: err})))
          )
      )
    )
  );
}
