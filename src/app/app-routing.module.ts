import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
export const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {path: 'login', redirectTo: '/dashboard'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'diagnoses',  loadChildren: 'app/components/diagnose/diagnose.module#DiagnoseModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

