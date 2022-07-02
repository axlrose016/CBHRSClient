import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'user-levels',
    loadChildren:() => import('./user-levels/user-levels.module').then(m => m.UserLevelsModule),
    data:{breadcrumb:'USER-LEVELS'}
  },
  {
    path:'request-types',
    loadChildren:() => import('./request-types/request-type.module').then(m => m.RequestTypeModule),
    data:{breadcrumb:'REQUEST-TYPES'}
  },
  {
    path:'departments',
    loadChildren:() => import('./departments/departments.module').then(m => m.DepartmentsModule),
    data:{breadcrumb:'DEPARTMENTS'}
  },
  {
    path:'job-categories',
    loadChildren:() => import('./job-categories/job-categories.module').then(m => m.JobCategoriesModule),
    data:{breadcrumb:'JOB-CATEGORIES'}
  },
  {
    path:'core-competencies',
    loadChildren:() => import('./core-competencies/core-competencies.module').then(m => m.CoreCompetenciesModule),
    data:{breadcrumb:'CORE-COMPETENCIES'}
  },
  {
    path:'competency-categories',
    loadChildren:() => import('./competency-categories/competency-categories.module').then(m => m.CompetencyCategoriesModule),
    data:{breadcrumb:'COMPETENCY-CATEGORIES'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariesRoutingModule { }
