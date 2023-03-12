import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly _url: string = 'https://reqres.in/api';

  constructor(private _http: HttpClient) {
  }

  public getUsers(): Observable<any> {
    return this._http.get(`${this._url}/users?per_page=6`)
      .pipe(
        map((resp: any) => resp['data'])
      );
  }

  public getUserById(id: string):  Observable<any> {
    return this._http.get(`${this._url}/users/${id}`)
      .pipe(
        //tap((user: any) => console.log(' user service ', user['data'])),
        map((resp: any) => resp ['data'])
      );
  }

}
