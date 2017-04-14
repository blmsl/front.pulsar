import { DataContainerComponent } from './../shared/components/data-container/data-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './../shared/components/main-layout/main-layout.component';

//import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupListComponent } from './groups/group-list.component';
import { GroupDetailComponent } from './groups/group-detail.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent,
        //canActivate: [AuthGuard],
        children: [
            {
                path: '',                                       component: DataContainerComponent,
                children: [
                    { path: '',                                 redirectTo: 'groups' },

                     // Dashboard
                    //{ path: 'dashboard',                        component: DashboardComponent },

                    // Groups
                    { path: 'groups',                           component: GroupListComponent },
                    { path: 'groups/create',                    component: GroupDetailComponent,       data: { action: 'create' }},
                    { path: 'groups/show/:id',                  component: GroupDetailComponent,       data: { action: 'edit' }},

                    // Wildcard route
                    { path: '**',                               redirectTo: 'dashboard' }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CrmRoutingModule {}
