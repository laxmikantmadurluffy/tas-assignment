import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login',component: LoginComponent},
  { path: 'patient',loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  { path: '**', redirectTo: 'login', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
