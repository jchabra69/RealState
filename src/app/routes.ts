import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { FormCrearComponent } from './form-crear/form-crear.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },

  {path: 'crear', component: FormCrearComponent,  title: 'Crear casa'}

];

export default routeConfig;
