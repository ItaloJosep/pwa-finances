import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { RegisterComponent } from './ui/register/register.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
