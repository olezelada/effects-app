import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../interfaces";
import {loadUser} from "../../store/actions";
import {Usuario} from "../../models/usuario.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit, OnDestroy {

  public user!: Usuario | null;
  public loading: boolean;
  public error: any;
  private _userSubscription: Subscription;

  constructor( private _route: ActivatedRoute,
               private _store: Store<AppState>) {
    this._userSubscription = new Subscription();
    //this.user = null;
    this.loading = false;
    this.error = null;
  }

  ngOnInit(): void {

    this._userSubscription = this._store.select('user').subscribe( ({ user, loading, error})  => {
      console.log('user name-> ', user);
      this.user = user;
      this.loading = loading;
      this.error = error;

    });

    this._route.params.subscribe(({ id }) => {
      console.log('id - ', id);
      this._store.dispatch( loadUser( ({ id: id }) ));
    });
  }

  ngOnDestroy(): void {
    this._userSubscription.unsubscribe();
  }

}
