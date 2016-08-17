import {Routes, RouterModule} from '@angular/router';

const patientsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'patients',
        pathMatch: 'full'
    }
];


const appRoutes: Routes = [
    ...patientsRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
