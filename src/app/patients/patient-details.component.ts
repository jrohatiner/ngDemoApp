/**
 * Created by ramor11 on 8/15/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PatientInformationComponent} from "./patient-information.component";


@Component({
    template: require('./views/patient-details.component.html'),
    directives: [PatientInformationComponent]
})


export class PatientDetailComponent implements OnInit {
    invoices: any;
    labResults: any;
    patient: any;
    physician: any;
    prescriptions: any;
    visitations: any;
    patientOpts:any;
    physicianOpts:any;




    constructor(private route: ActivatedRoute,
                private router: Router) {

        this.patientOpts = {
            title:'Patient Information',
            allowEdit:true
        };

        this.physicianOpts = {
            title:'Physician Information',
            allowEdit:false
        };
    }


    ngOnInit() {

        this.route.data.forEach((data: any) => {
            let object: any = data.patientDetails;
            console.log('data', object)

            this.invoices = object['invoices'];
            this.labResults = object['labResults'];
            this.patient = object['patient'];
            this.physician = object['physician'];
            this.prescriptions = object['prescriptions'];
            this.visitations = object['visitations'];
        });

    }

}
