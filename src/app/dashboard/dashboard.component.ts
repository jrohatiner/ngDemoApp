/**
 * Created by ramor11 on 8/15/2016.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    template: require('./dashboard.component.html')
})


export class DashboardComponent {
    constructor(private router: Router) {
    }

    execute() {
        this.router.navigate(['/patients']);
    }


}
