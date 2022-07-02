import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthService } from 'app/shared/service/auth.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      canActivate:[AuthService],
      data:{
        role:'*'
      },
      loadChildren:() => import('./home/home.module')
        .then(m => m.HomeModule),
    },
    {
      path: 'forms',
      canActivate:[AuthService],
      data:{
        role:'*'
      },
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'recruitment',
      canActivate:[AuthService],
      data:{
        role:'Administrator'
      },
      loadChildren:() => import('./recruitment/recruitment.module')
        .then(m => m.RecruitmentModule),
    },
    {
      path: 'learning-and-development',
      canActivate:[AuthService],
      data:{
        role:'Administrator'
      },
      loadChildren:() => import('./learning_and_development/learning-and-development.module')
        .then(m => m.LearningAndDevelopmentModule),
    },
    {
      path: 'performance',
      canActivate:[AuthService],
      data:{
        role:'Administrator'
      },
      loadChildren:() => import('./performance/performance.module')
        .then(m => m.PerformanceModule)
    },
    {
      path: 'internal-management',
      canActivate:[AuthService],
      data:{
        role:'Administrator'
      },
      loadChildren:() => import('./internal-management/internal-management.module')
        .then(m => m.InternalManagementModule)
    },
    {
      path: 'charts',
      canActivate:[AuthService],
      data:{
        role:'Administrator'
      },
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'tables',
      canActivate:[AuthService],
      data:{
        role:'Administrator'
      },
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'settings',
      canActivate:[AuthService],
      data:{
        role:'Administrator'
      },
      loadChildren:() => import('./setting/setting.module')
        .then(m => m.SettingModule),
    },
    {
      path: '',
      redirectTo: 'home/content',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
