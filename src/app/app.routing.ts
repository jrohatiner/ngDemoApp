import {Routes, RouterModule} from '@angular/router';

const patientsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];


const appRoutes: Routes = [
    ...patientsRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
