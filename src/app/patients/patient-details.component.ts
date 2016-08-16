/**
 * Created by ramor11 on 8/15/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Invoices, LabResults, Patient, Visitations, Prescriptions, Physician} from "./patient-details-resolve.service";
import {Patients} from "./patients-resolve.service";


@Component({
    template: require('./views/patient-details.component.html')
})


export class PatientDetailComponent implements OnInit {
    invoices: Invoices[];
    labResults: LabResults[];
    patient: Patient;
    physician: Physician;
    prescriptions: Prescriptions;
    visitations: Visitations;


    constructor(private route: ActivatedRoute,
                private router: Router) {
    }


    ngOnInit() {


        this.route.data.forEach(data => {
            console.log('PatientDetailComponent => ', data)
            this.invoices = data['invoices'];
            this.labResults = data['labResults'];
            this.patient = data['patient'];
            this.physician = data['physician'];
            this.prescriptions = data['prescriptions'];
            this.visitations = data['visitations'];
        });

    }

}
