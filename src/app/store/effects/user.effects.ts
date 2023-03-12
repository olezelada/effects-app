import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadUser, loadUserFail, loadUserSuccess} from "../actions";
import {catchError, exhaustMap, map, mergeMap, tap} from "rxjs/operators";
import {UsuarioService} from "../../services/usuario.service";
import {of} from "rxjs";


@Injectable()
export class UserEffects {

  constructor(private _action$: Actions,
              private _userService: UsuarioService) {}

  loadUser$ = createEffect(
    () => this._action$.pipe(
      ofType(loadUser),
      mergeMap(
        (action) =>
          this._userService.getUserById(action.id)
            .pipe(
              //tap( (user) => console.log(' effects user ',user)),
              map((user) => loadUserSuccess(user)),
              catchError(err => of(loadUserFail({payload: err})))
            )
      )
    )
  );

/*  loadUser$ = createEffect(
    () => this._action$.pipe(
      ofType(loadUser),
      exhaustMap(
        action =>
          this._userService.getUserById(action.id)
            .pipe(
              map(user => loadUserSuccess({user})),
              catchError(err => of(loadUserFail({payload: err})))
            )
      )
    )
  );*/

}
