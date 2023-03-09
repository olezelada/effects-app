import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ListaComponent} from "./usuarios/lista/lista.component";
import {UserComponent} from "./usuarios/user/user.component";

const ROUTES: Routes = [
  {
    path:'home', component: ListaComponent
  },
  {
    path:'usuario/:id', component: UserComponent
  },
  {
    path:'**', redirectTo: 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
