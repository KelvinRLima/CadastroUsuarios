import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './modules/usuario/components/usuario/usuario.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "usuario",
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
