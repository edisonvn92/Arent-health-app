import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { GeneralComponent } from './layouts/general/general.component';
import { PersonalComponent } from './layouts/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/personal/home',
    pathMatch: 'full'
  },
  {
    path: 'personal',
    component: PersonalComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: '/personal/home',
        pathMatch: 'full'
      },
      { 
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
      }, 
      { 
        path: 'my-record', 
        loadChildren: () => import('./modules/my-record/my-record.module').then(m => m.MyRecordModule) 
      },
    ],
  },
  {
    path: 'general',
    component: GeneralComponent,
    children: [
      {
        path: '',
        redirectTo: '/column-list',
        pathMatch: 'full'
      },
      { 
        path: 'column-list', 
        loadChildren: () => import('./modules/column-list/column-list.module').then(m => m.ColumnListModule) 
      }
    ]
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
