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
        let patientsJSON: any = JSON.parse(require('!!raw!../../api/patients.json'));
        let loopThrough = function (loop: Array<any>) {
            //reset
            self.patients = [];
            loop.forEach((obj: any, idx: number) => {
                let p = obj.patient;
                self.patients.push(new Patients(
                    idx,
                    p.firstName,
                    p.lastName,
                    'images/patient-02.svg'
                ))
            });

        }

        return new Promise((resolve) => {
            loopThrough(patientsJSON.patientList);
            resolve(self.patients);
        });
    }


    getDetails(): Promise<any> | any {

        return new Promise((resolve) => {
            let invoicesJSON: any = JSON.parse(require('!!raw!../../api/invoices.json'));
            let labResultsJSON: any = JSON.parse(require('!!raw!../../api/labResults.json'));
            let patientJSON: any = JSON.parse(require('!!raw!../../api/patient.json'));
            let physicianJSON: any = JSON.parse(require('!!raw!../../api/physician.json'));
            let prescriptionsJSON: any = JSON.parse(require('!!raw!../../api/prescriptions.json'));
            let visitationsJSON: any = JSON.parse(require('!!raw!../../api/visitations.json'));
            let api = {
                'invoices': invoicesJSON['invoices'],
                'labResults': labResultsJSON['tests'],
                'patient': function () {
                    return Object.assign({}, patientJSON, {imageUrl: 'images/patient-02.svg'});
                }(),
                'physician': function () {
                    return Object.assign({}, physicianJSON, {imageUrl: 'images/doctor-01.svg'});
                }(),
                'prescriptions': prescriptionsJSON['prescriptions'],
                'visitations': visitationsJSON['visitations']
            };

            resolve(api);

        });


    }


}
