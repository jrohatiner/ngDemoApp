/**
 * Created by reyra on 8/14/2016.
 */

import {Routes, RouterModule} from '@angular/router'
import {DashboardComponent} from "./dashboard.component";


const dashboardRoutes: Routes = [
    {
        path: 'home',
        component: DashboardComponent
    }
];


export const dashboardRouting = RouterModule.forChild(dashboardRoutes);
