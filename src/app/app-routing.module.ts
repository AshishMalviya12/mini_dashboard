import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { ThirdRouteComponent } from './third-route/third-route.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'route1',
    pathMatch: 'full',
  },
  {
    path: 'route1',
    component: HomeComponent
  },
  {
    path: 'route2',
    component: SecondRouteComponent
  },
  {
    path: 'route3',
    component: ThirdRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
