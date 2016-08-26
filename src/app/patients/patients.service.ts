/**
 * Created by ramor11 on 8/16/2016.
 */
import {Injectable}             from '@angular/core';
import {Http, Response}         from '@angular/http'
import {Observable}             from 'rxjs/Rx';


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

    constructor(private http: Http) {

        return PatientService.instance = PatientService.instance || this;

    }


    // Uses http.get() to load a single JSON file
    getPatients() {
        let self = this;


        return this.http.get('api/patients.json').map((res: Response) => {
            //reset
            self.patients = [];
            res.json().patientList.forEach((obj: any, idx: number) => {
                let p = obj.patient;
                self.patients.push(new Patients(
                    idx,
                    p.firstName,
                    p.lastName,
                    'images/patient-02.svg'
                ))
            });

            return self.patients;
        });
    }

    //returning a promise
    getDetails(id: any): Promise<any> | any {

        let self = this;

        return new Promise((resolve) => {
            Observable.forkJoin(
                this.http.get('api/invoices.json').toPromise().then(response => response.json()),
                this.http.get('api/labResults.json').toPromise().then(res => res.json()),
                this.http.get('api/patient.json').toPromise().then(res => res.json()),
                this.http.get('api/physician.json').toPromise().then(res => res.json()),
                this.http.get('api/prescriptions.json').toPromise().then(res => res.json()),
                this.http.get('api/visitations.json').toPromise().then(res => res.json())
            ).subscribe(data => {

                let api = {
                    'invoices': data[0]['invoices'],
                    'labResults': data[1]['tests'],
                    'patient': function () {
                        return Object.assign({}, data[2],  {imageUrl: 'images/patient-02.svg'});
                    }(),
                    'physician': function () {
                        return Object.assign({}, data[3], {imageUrl: 'images/doctor-01.svg'});
                    }(),
                    'prescriptions': data[4]['prescriptions'],
                    'visitations': data[5]['visitations']
                };

                resolve(api);
            })
        });


    }


}
