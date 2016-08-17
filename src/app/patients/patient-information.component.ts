/**
 * Created by ramor11 on 8/16/2016.
 */

import {Component} from '@angular/core';
import {Patient, PatientService} from "./patients.service";
import {Router} from "@angular/router";


@Component({
	selector: 'patient-information',
	inputs  : ['patientInfo', 'options'],
	template: require('./views/patient-information.html')
})


export class PatientInformationComponent {

	edit: boolean = false;

	constructor(private patientService: PatientService,
	            private router: Router) {
	}

	onEdit() {
		this.edit = !this.edit;
	}

	onSubmit(patient: Patient) {
		this.edit = !this.edit;


	}

}
