import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
