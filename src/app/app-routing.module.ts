import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
    canLoad: [AuthGuard],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
