import {Routes, RouterModule} from '@angular/router';


const patientsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'patients',
        loadChildren: () => new Promise(resolve => {
            return (require as any).ensure([], (require: any) => {
                return resolve(require('./patients/patients.module').PatientsModule);
            });
        })
    }
];


const appRoutes: Routes = [
    ...patientsRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
