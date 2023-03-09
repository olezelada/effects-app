import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  public irUsuario(id: string): void {

    if (!id) {
      return;
    }
    this._router.navigate(['/usuario',id]);

  }


}
