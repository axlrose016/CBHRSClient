import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'ldna',
    loadChildren:() => import('./ldna/ldna.module').then(m => m.LdnaModule),
    data:{breadcrumb:'LDNA'}
  },
  {
    path:'learning-and-evaluation',
    loadChildren:() => import('./learning_and_evaluation/learning-and-evaluation.module').then(m => m.LearningAndEvaluationModule),
    data:{breadcrumb:'LEARNING-AND-DEVELOPMENT'}
  },
  {
    path:'training-evaluation',
    loadChildren:() => import('./training_evaluation/training-evaluation.module').then(m => m.TrainingEvaluationModule),
    data:{breadcrumb:'TRAINING-EVALUATION'}
  },
  {
    path:'wap',
    loadChildren:() => import('./wap/wap.module').then(m => m.WapModule),
    data:{breadcrumb:'WAP'}
  },
  {
    path:'performance-rating',
    loadChildren:() => import('./performance-rating/performance-rating.module').then(m => m.PerformanceRatingModule),
    data:{breadcrumb:'PERFORMANCE-RATING'}
  }
  // {
  //   path:'workplace-application-plan',
  //   loadChildren:() => import('./workplace-application-plan/workplace-application-plan.module').then(m => m.WorkplaceApplicationPlanModule),
  //   data:{breadcrumb:'WORKPLACE-APPLICATION-PLAN'}
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningAndDevelopmentRoutingModule { }
