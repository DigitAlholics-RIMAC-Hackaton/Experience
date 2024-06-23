import { Routes } from '@angular/router';
import {Pajes1Component} from "./experience/pages/pajes1/pajes1.component";
import {Pajes3Component} from "./experience/pages/pajes3/pajes3.component";

export const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome' , component: Pajes1Component},
  {path: 'products' , component: Pajes3Component}
];
