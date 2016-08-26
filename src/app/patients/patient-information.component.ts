/**
 * Created by ramor11 on 8/16/2016.
 */

import {Component, Input} from '@angular/core';


@Component({
	selector: 'patient-information',
	// template: require('./views/patient-information.html')
	templateUrl: './views/patient-information.html'

})


export class PatientInformationComponent {

	@Input() patientInfo: any;
	@Input() options: any;

	edit: boolean = false;


	onEdit() {
		this.edit = !this.edit;
	}

	onSubmit() {
		this.edit = !this.edit;
	}

}
