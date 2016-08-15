/**
 * Created by ramor11 on 8/15/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    template: require('./dashboard.component.html')
})


export class DashboardComponent implements OnInit{
    today:any;

    constructor(private router: Router) {
    }

    execute() {
        this.router.navigate(['/patients']);
    }


    ngOnInit() {
        this.today =  new Date();
    }

}
