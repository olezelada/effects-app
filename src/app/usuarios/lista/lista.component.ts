import {Component, OnDestroy, OnInit} from '@angular/core';
import {Usuario} from "../../models/usuario.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../interfaces";
import {loadUsers} from "../../store/actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy {

  public users: Usuario[];
  private _usersSubscription: Subscription;
  public loading: boolean;
  public error: any;

  constructor(private _store: Store<AppState>) {
    this.users = [];
    this.loading = false;
    this.error = null;
    this._usersSubscription = new Subscription();
  }

  public ngOnInit(): void {

    this._usersSubscription = this._store.select('users').subscribe(({users, loading, error}) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });

    this._store.dispatch(loadUsers());
  }

  public ngOnDestroy(): void {
    this._usersSubscription.unsubscribe();
  }

}
