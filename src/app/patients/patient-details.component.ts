/**
 * Created by ramor11 on 8/15/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    template: require('./views/patient-details.component.html')
})


export class PatientDetailComponent implements OnInit {
    // invoices: Invoices[];
    // labResults: LabResults[];
    // patient: Patient;
    // physician: Physician;
    // prescriptions: Prescriptions;
    // visitations: Visitations;


    constructor(private route: ActivatedRoute,
                private router: Router) {
    }


    ngOnInit() {

        this.route.data.forEach((data: any) => {
            console.log('ngOnInit', data)
            // let object:any = data.patientDetails;
            //
            // this.invoices = object['invoices'];
            // this.labResults = object['labResults'];
            // this.patient = object['patient'];
            // this.physician = object['physician'];
            // this.prescriptions = object['prescriptions'];
            // this.visitations = object['visitations'];
        });

    }

}