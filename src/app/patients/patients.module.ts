/**
 * Created by ramor11 on 8/15/2016.
 */

import {NgModule}       from '@angular/core';
import {FormsModule}    from '@angular/forms';
import {CommonModule}   from '@angular/common';

import {patientsRouting} from './patients.routing';
import {PatientsResolve} from "./patients-resolve.service";
import {PatientsListComponent} from "./patients-list.component";
import {PatientDetailComponent} from "./patient-details.component";
import {PatientDetailsResolve} from "./patient-details-resolve.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        patientsRouting
    ],
    declarations: [
        PatientsListComponent,
        PatientDetailComponent
    ],
    providers: [
        PatientsResolve,
        PatientDetailsResolve

    ]
})

export class PatientsModule {
}
