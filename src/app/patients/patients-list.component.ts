/**
 * Created by ramor11 on 8/15/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Patients} from "./patients.service";

@Component({
    template: require('./views/patients-list.component.html')
})


export class PatientsListComponent implements OnInit {
    patients: Patients;

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    onPatient(patient: Patients) {
        this.router.navigate(['/patients/patient', patient.id]);
    }

    ngOnInit() {
        this.route.data.forEach((data: { patients: Patients }) => {
            this.patients = data.patients;
        });
    }
}
