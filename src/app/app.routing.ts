import {Routes, RouterModule} from '@angular/router';


import {load} from './utils/async-ng-module-loader';

const patientsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'patients',
        loadChildren: load(() => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./patients/patients.module').PatientsModule);
            })
        }))
    }
];


const appRoutes: Routes = [
    ...patientsRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
