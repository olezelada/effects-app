import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly _url: string = 'https://reqres.in/api';

  constructor(private _http: HttpClient) {
  }

  public getUsers() {
    return this._http.get(`${this._url}/users?per_page=6`)
      .pipe(
        map( (resp: any) => {
          return resp['data'];
        })
      );
  }
}
