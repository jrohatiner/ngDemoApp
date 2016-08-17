/**
 * Created by ramor11 on 8/16/2016.
 */
import {Injectable}             from '@angular/core';

export class Patients {
	constructor(public id: number,
	            public firstName: string,
	            public lastName: string,
	            public imageUrl: string,
	            public city?: string,
	            public email?: string,
	            public addressLine1?: string,
	            public phone?: string,
	            public state?: string,
	            public zip?: number) {
	}
}

export class Invoices {
	constructor(public amount: string,
	            public dueData: string) {
	}
}

export class LabResults {
	constructor(public level: string,
	            public result: string,
	            public test: string) {
	}
}

export class Patient {
	constructor(public addressLine1: string,
	            public id: number,
	            public city: string,
	            public email: string,
	            public firstName: string,
	            public imageUrl: string,
	            public lastName: string,
	            public phone: string,
	            public state: string,
	            public zip: number) {
	}
}

export class Physician {
	constructor(public addressLine1: string,
	            public city: string,
	            public email: string,
	            public firstName: string,
	            public imageUrl: string,
	            public lastName: string,
	            public phone: string,
	            public state: string,
	            public zip: number) {
	}
}

export class Prescriptions {
	constructor(public dosage: string,
	            public name: string,
	            public refill: string) {
	}
}

export class Visitations {
	constructor(public date: string,
	            public doctor: string) {
	}
}

@Injectable()
export class PatientService {
	static instance: PatientService;

	patients: Array<any> = [];

	constructor() {

		return PatientService.instance = PatientService.instance || this;

	}


	// Uses http.get() to load a single JSON file
	getPatients(): Promise<any> | any {
		let self = this;
		let patientsJSON:any = JSON.parse(require('!!raw!../../api/patients.json'));
		let loopThrough = function(loop:Array<any>){
			//reset
			self.patients = [];
			loop.forEach((obj: any, idx: number) => {
				let p = obj.patient;

				let min: number = Math.ceil(1);
				let max: number = Math.floor(4);


				self.patients.push(new Patients(
					idx,
					p.firstName,
					p.lastName,
					['images/avatars/' + (idx % 2 ? 'male' : 'female'),
						'avatar',
						//this is to force a new http for every image being loaded, simulate proper images, since
						//everyone don't look the same.
						(Math.floor(Math.random() * (max - min)) + min)].join('-') + '.png?' + (Date.now() + idx)
				))
			});

		}

		return new Promise((resolve) => {
				//reset
				loopThrough(patientsJSON.patientList);

			resolve(self.patients);
		});

		// return this.http.get('api/patients.json').map((res: Response) => {
		// 	//reset
		// 	self.patients = [];
		// 	loopThrough(res.json().patientList);
		//
		// 	return self.patients;
		// });



	}


	//returning a promise
	getDetails(id: any): Promise<any> | any {

		let self = this;



		// if(!this.patients.length)return this.handleError('failed to load patients');

		return new Promise((resolve, reject) => {


				let invoicesJSON:any = JSON.parse(require('!!raw!../../api/invoices.json'));
				let labResultsJSON:any = JSON.parse(require('!!raw!../../api/labResults.json'));
				let patientJSON:any = JSON.parse(require('!!raw!../../api/patient.json'));
				let physicianJSON:any = JSON.parse(require('!!raw!../../api/physician.json'));
				let prescriptionsJSON:any = JSON.parse(require('!!raw!../../api/prescriptions.json'));
				let visitationsJSON:any = JSON.parse(require('!!raw!../../api/visitations.json'));


			// Observable.forkJoin(
			// 	this.http.get('api/invoices.json').toPromise().then(response => response.json()),
			// 	this.http.get('api/labResults.json').toPromise().then(res => res.json()),
			// 	this.http.get('api/patient.json').toPromise().then(res => res.json()),
			// 	this.http.get('api/physician.json').toPromise().then(res => res.json()),
			// 	this.http.get('api/prescriptions.json').toPromise().then(res => res.json()),
			// 	this.http.get('api/visitations.json').toPromise().then(res => res.json())
			// )
			// 	.toPromise()
			// 	.then(
			// 		data => {

						// let api = {
						// 	'invoices'     : data[0]['invoices'],
						// 	'labResults'   : data[1]['tests'],
						// 	'patient'      : function () {
						// 		return Object.assign({}, data[2], {imageUrl: self.patients.length ? self.patients[id].imageUrl : 'images/placeholder.svg'});
						// 	}(),
						// 	'physician'    : function () {
						// 		return Object.assign({}, data[3], {imageUrl: 'images/doctor-01.svg'});
						// 	}(),
						// 	'prescriptions': data[4]['prescriptions'],
						// 	'visitations'  : data[5]['visitations']
						// };

						let api = {
							'invoices'     : invoicesJSON['invoices'],
							'labResults'   : labResultsJSON['tests'],
							'patient'      : function () {
								return Object.assign({}, patientJSON, {imageUrl: self.patients.length ? self.patients[id].imageUrl : 'images/placeholder.svg'});
							}(),
							'physician'    : function () {
								return Object.assign({}, physicianJSON, {imageUrl: 'images/doctor-01.svg'});
							}(),
							'prescriptions': prescriptionsJSON['prescriptions'],
							'visitations'  : visitationsJSON['visitations']
						};


						resolve(api);
				// 	},
				// 	err => this.handleError(err)
				// )
				// .catch(this.handleError);
		});


	}


}
