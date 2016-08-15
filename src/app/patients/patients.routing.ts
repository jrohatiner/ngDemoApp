/**
 * Created by ramor11 on 8/15/2016.
 */

import {Routes, RouterModule}  from '@angular/router';
import {PatientsComponent} from "./patients.component";
import {PatientsListComponent} from "./patients-list.component";


const patientsRoutes: Routes = [
    {
        path: '',
        component: PatientsComponent,
        children: [
            {
                path: '',
                component: PatientsListComponent
            },
            // {
            //     path: ':id',
            //     component: PatientDetailComponent,
            //     // canDeactivate: [CanDeactivateGuard],
            //     // resolve: {
            //     //     crisis: CrisisDetailResolve
            //     // }
            // }
        ]
    }
];

export const patientsRouting = RouterModule.forChild(patientsRoutes);
