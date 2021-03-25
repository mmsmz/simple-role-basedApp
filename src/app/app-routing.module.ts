import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ 
  { path: '', redirectTo: "login",pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
