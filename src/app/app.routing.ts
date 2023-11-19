import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'empleados', component: EmpleadosComponent },

   
  ];
  
  export const appRoutingProvider: any[] = [];
  export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);