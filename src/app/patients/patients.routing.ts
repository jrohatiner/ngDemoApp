/**
 * Created by ramor11 on 8/15/2016.
 */

import {Routes, RouterModule}  from '@angular/router';

import {PatientsListComponent} from "./patients-list.component";
import {PatientDetailComponent} from "./patient-details.component";


//resolve
import {PatientsResolve} from "./patients-resolve.service";
import {PatientDetailsResolve} from "./patient-details-resolve.service";


const patientsRoutes: Routes = [
    {
        path: 'patients',
        children: [
            {
                path: 'patient/:id',
                component: PatientDetailComponent,
                resolve: {
                    patientDetails: PatientDetailsResolve
                }

            },
            {
                path: '',
                component: PatientsListComponent,
                resolve: {
                    patients: PatientsResolve
                }
            }
        ]
    }
];

export const patientsRouting = RouterModule.forChild(patientsRoutes);
