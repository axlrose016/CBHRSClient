import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'employee-discipline',
    loadChildren:() => import('./employee-discipline/employee-discipline.module').then(m => m.EmployeeDisciplineModule),
    data:{breadcrumb:'EMPLOYEE-DISCIPLINE'}
  },
  {
    path:'work-performance-evaluation',
    loadChildren:() => import('./work-performance-evaluation/work-performance-evaluation.module').then(m => m.WorkPerformanceEvaluationModule),
    data:{breadcrumb:'WORK-PERFORMANCE-EVALUATION'}
  },
  {
    path:'budget-utilization',
    loadChildren:() => import('./budget-utilization/budget-utilization.module').then(m => m.BudgetUtilizationModule),
    data:{breadcrumb:'BUDGET-UTILIZATION'}
  },
  {
    path:'organizational-goals',
    loadChildren:() => import('./organizational-goal/organizational-goal.module').then(m => m.OrganizationalGoalModule),
    data:{breadcrumb:'ORGANIZATIONAL-GOAL'}
  },
  {
    path:'hr-staffing-plan',
    loadChildren:() => import('./hr-staffing-plan/hr-staffing-plan.module').then(m => m.HrStaffingPlanModule),
    data:{breadcrumb:'HR-STAFFING-PLAN'}
  },
  {
    path:'complaints-center',
    loadChildren:() => import('./complaints-center/complaints-center.module').then(m => m.ComplaintsCenterModule),
    data:{breadcrumn:'COMPLAINTS-CENTER'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
