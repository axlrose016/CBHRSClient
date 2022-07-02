import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
import { NotFoundComponent } from './pages/miscellaneous/not-found/not-found.component';


export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'pages',
    canActivate:[AuthService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
