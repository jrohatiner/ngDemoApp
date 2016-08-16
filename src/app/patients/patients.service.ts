/**
 * Created by ramor11 on 8/16/2016.
 */
import {Injectable}             from '@angular/core';
import {Http, Response}         from '@angular/http'
import {Router}                 from "@angular/router";
import {Observable}             from 'rxjs/Rx';


export class Patients {
    constructor(public id: number,
                public fname: string,
                public lname: string,
                public imageUrl: string) {
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

    private patients: Array<any>;  // URL to web api
    private patientDetails: Array<any>;  // URL to web api

    constructor(private http: Http,
                private router: Router) {
    }


    // Uses http.get() to load a single JSON file
    getPatients() {

        let patients: Array<any> = [];

        return this.http.get('api/patients.json').map((res: Response) => {
            res.json().patientList.forEach((obj: any, idx: number) => {
                let p = obj.patient;

                let min: number = Math.ceil(1);
                let max: number = Math.floor(4);


                patients.push(new Patients(
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

            return patients;
        });
    }


    // Uses http.get() to load a single JSON file
    getDetails(id: number) {

        console.log('id', id)

        return new Promise((resolve, reject) => {
            Observable.forkJoin(
                this.http.get('api/invoices.json').toPromise().then(response => response.json()),
                this.http.get('api/labResults.json').toPromise().then(res => res.json()),
                this.http.get('api/patient.json').toPromise().then(res => res.json()),
                this.http.get('api/physician.json').toPromise().then(res => res.json()),
                this.http.get('api/prescriptions.json').toPromise().then(res => res.json()),
                this.http.get('api/visitations.json').toPromise().then(res => res.json())
            )
                .toPromise()
                .then(
                    data => {

                        console.log('getDetails', data)

                        // let api = {
                        //     'invoices': data[0]['invoices'],
                        //     'labResults': data[1]['tests'],
                        //     'patient': function (route: any) {
                        //         let id: number = +route.params.id;
                        //         return Object.assign({}, data[2], data[6].patientList[id].patient);
                        //     }(route),
                        //     'physician': data[3],
                        //     'prescriptions': data[4]['prescriptions'],
                        //     'visitations': data[5]['visitations']
                        // };
                        // return api;

                        resolve(data);
                    },
                    err => this.handleError(err)
                )
                .catch(this.handleError);
        });


    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        this.router.navigate(['/home']);
        return Promise.reject(error.message || error);
    }


}
