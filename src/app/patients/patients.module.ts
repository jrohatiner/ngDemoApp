/**
 * Created by ramor11 on 8/15/2016.
 */

import {NgModule}       from '@angular/core';
import {FormsModule}    from '@angular/forms';
import {CommonModule}   from '@angular/common';

import {patientsRouting} from './patients.routing';
import {PatientsComponent} from "./patients.component";
import {PatientsResolve} from "./patients-resolve.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        patientsRouting
    ],
    declarations: [
        PatientsComponent
    ],
    providers: [
        PatientsResolve
    ]
})

export class PatientsModule {
}
