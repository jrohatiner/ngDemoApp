/**
 * Created by ramor11 on 8/16/2016.
 */

import {Component} from '@angular/core';


@Component({
	selector: 'patient-information',
	inputs  : ['patientInfo', 'options'],
	template: require('./views/patient-information.html')
})


export class PatientInformationComponent {
	patientInfo:any;
	options:any

	edit: boolean = false;

	constructor() {
	}

	onEdit() {
		this.edit = !this.edit;
	}

	onSubmit() {
		this.edit = !this.edit;


	}

}
