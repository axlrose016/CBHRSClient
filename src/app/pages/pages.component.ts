import { Component } from '@angular/core';
import { AuthService } from 'app/shared/service/auth.service';
import { AuthGuard } from 'app/shared/service/authGuard.service';
import { GlobalVariablesService } from 'app/shared/service/globalVariables.service';
import { Guid } from 'guid-typescript';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})

export class PagesComponent  {


  menu = MENU_ITEMS;
  constructor(private gd: GlobalVariablesService,
              private authG: AuthGuard){
                this.authG.checkUserAccess(Guid.parse(localStorage.getItem('secI'))).subscribe(res => {
                  this.gd.storeUserLevel(res);
                  this.initView();
                });
  }

  initView(){
    this.menu = [
      {
        title: 'Home',
        icon:'home-outline',
        link:'/pages/home/content',
        home:true,
      },
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Employee Management',
        icon: 'people-outline',
        children: [
          {
            title: 'PDS',
            children:[
              {
                title:'My Pds',
                link:'/pages/forms/pds/'+localStorage.getItem('secI')
              },
              {
              title:'List',
              link:'/pages/forms/pds/list',
              "hidden": this.gd.user_level.userLevelId == 4 || this.gd.user_level.userLevelId == 2 ? false :true,
            },
          ],
          },
          {
            title:'Leave of Application',
            children:[
              {
                title:'My Leave Applications'
              },
              {
                title:'List',
              }
            ]
          },
          // {
          //   title:'Clearance',
          //   children:[
          //     {
          //       title:'My Clearance',
          //       link:'/pages/forms/clearance/'+localStorage.getItem('secPI')
          //     },
          //     {
          //       title:'List',
          //       link:'/pages/forms/clearance/list',
          //       "hidden":this.gd.user_level.userLevelId == 4 || this.gd.user_level.userLevelId == 2 ? false:true,
          //     }
          //   ]
          // },
          // {
          //   title:'PES11',
          //   children:[
          //     {
          //       title:'PES 11',
          //       link:'/pages/forms/pes11/'+localStorage.getItem('secPI')
          //     },
          //     {
          //       title:'List',
          //       link:'/pages/forms/pes11/list',
          //       "hidden":this.gd.user_level.userLevelId == 4 || this.gd.user_level.userLevelId == 2 ? false:true,
          //     }
          //   ]
          // },
        ],
      },
      {
        title: 'Recruitement and Appoinment',
        icon: 'edit-2-outline',
        "hidden": this.gd.user_level.userLevelId == 4 ? false:true,
        children: [
          // {
          //   title: 'Jobs',
          //   children:[{
          //     title:'List',
          //     link:'/pages/recruitment/jobs/list',
          //   },
          //   {
          //     title:'Classification',
          //     link:'/pages/recruitment/jobs/classification'
          //   }
          // ],
          // },
          // {
          //   title: 'Appointment and Compensation',
          //   children:[{
          //     title:'List',
          //     link:'/pages/recruitment/appointment-and-compensation/list',
          //   },
          // ],
          // }
          {
            title:'Job Classifications',
            link:'/pages/recruitment/job-classification/list'
          },
          {
            title:'Appointment'
          }
        ],
      },
      {
        title: 'Learning and Development',
        icon: 'trending-up-outline',
        "hidden": this.gd.user_level.userLevelId == 4 ? false:true,
        children: [
          {
            title: 'Workplace Application Plan',
            children:[{
                title:'My WAP',
                link:'/pages/learning-and-development/wap/'+localStorage.getItem('secI')
              },
              {
              title:'List',
              link:'/pages/learning-and-development/wap/list',
              },
            ],
          },
          {
            title: 'Performance Rating',
            children:[{
              title:'List',
              link:'/pages/learning-and-development/performance-rating/list'
            }]
          },
          {
            title: 'LDNA',
            children:[{
              title:'List',
              link:'/pages/learning-and-development/ldna/list',
            }]
          }
          // {
          //   title: 'LDNA',
          //   children:[{
          //     title:'List',
          //     link:'/pages/learning-and-development/ldna/list',
          //   }]
          // },
          // {
          //   title: 'Learning and Evaluation',
          //   children:[{
          //     title:'List',
          //     link:'/pages/learning-and-development/learning-and-evaluation/list',
          //     },
          //   ],
          // },
          // {
          //   title: 'Training Evaluation',
          //   children:[{
          //     title:'List',
          //     link:'/pages/learning-and-development/training-evaluation/list',
          //     },
          //   ],
          // },
        ],
      },
      {
        title: 'Performance',
        icon: 'bar-chart-outline',
        "hidden": this.gd.user_level.userLevelId == 4 ? false:true,
        children: [
          // {
          //   title: 'Employee Discipline',
          //   children:[{
          //     title:'List',
          //     link:'/pages/performance/employee-discipline/list',
          //   },
          // ],
          // },
          // {
          //   title: 'Work Performance Evaluation',
          //   children:[{
          //     title:'List',
          //     link:'/pages/performance/work-performance-evaluation/list',
          //   },
          // ],
          // },
          {
            title: 'Internal Quality',
            children:[{
              title:'Budget Utilization',
              link:'/pages/performance/budget-utilization/list'
            },{
              title:'Organizational Goals',
              link:'/pages/performance/organizational-goals/list'
            },{
              title:'HR Staffing Plan',
              link:'/pages/performance/hr-staffing-plan/list'
            }]
          },
          {
            title: 'Complaints Center',
            link:'/pages/performance/complaints-center/list'
          }
        ],
      },
      // {
      //   title: 'Internal Management',
      //   icon: 'edit-1-outline',
      //   "hidden": this.gd.user_level.userLevelId == 4 ? false:true,
      //   children: [
      //     {
      //       title: 'Office Profile',
      //       children:[{
      //         title:'List',
      //         link:'/pages/internal-management/office-profile/list',
      //       },
      //     ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Settings',
      //   icon: 'settings-2-outline',
      //   "hidden": this.gd.user_level.userLevelId == 4 ? false:true,
      //   children:[
      //     {
      //       title:'Users',
      //       children:[{
      //         title:'List',
      //         link:'/pages/settings/users/list',
      //       }]
      //     },
      //     {
      //       title:'Libraries',
      //       children:[{
      //         title:'User-Levels',
      //         children:[
      //           {
      //             title:'List',
      //             link:'/pages/settings/libraries/user-levels/list'
      //           }
      //         ]
      //       },{
      //         title:'Request-Types',
      //         children:[
      //           {
      //             title:'List',
      //             link:'/pages/settings/libraries/request-types/list'
      //           }
      //         ]
      //       },{
      //         title:'Departments',
      //         children:[
      //           {
      //             title:'List',
      //             link:'/pages/settings/libraries/departments/list'
      //           }
      //         ]
      //       },{
      //         title:'Job-Categories',
      //         children:[
      //           {
      //             title:'List',
      //             link:'/pages/settings/libraries/job-categories/list'
      //           }
      //         ]
      //       },{
      //         title:'Core-Competencies',
      //         children:[
      //           {
      //             title:'List',
      //             link:'/pages/settings/libraries/core-competencies/list'
      //           }
      //         ]
      //       },{
      //         title:'Competency-Categories',
      //         children:[
      //           {
      //             title:'List',
      //             link:'/pages/settings/libraries/competency-categories/list'
      //           }
      //         ]
      //       }]
      //     }
      //   ]
      // }
    ]
  }
}
