import {Injectable}             from '@angular/core';
import {Http} from '@angular/http'
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';

import {Observable} from 'rxjs/Rx';

export class Invoices {
    constructor(public amount: string,
                public dueData: string) {
    }
}

export class LabResults {
    constructor(public level: string,
                public result: string,
                public test: string,) {
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
export class PatientDetailsResolve implements Resolve<any> {

    constructor(private router: Router,
                private http: Http) {
    }

    resolve(route: ActivatedRouteSnapshot): any {

        return Observable.forkJoin(
            this.http.get('api/invoices.json').toPromise().then(response => response.json()),
            this.http.get('api/labResults.json').toPromise().then(res => res.json()),
            this.http.get('api/patient.json').toPromise().then(res => res.json()),
            this.http.get('api/physician.json').toPromise().then(res => res.json()),
            this.http.get('api/prescriptions.json').toPromise().then(res => res.json()),
            this.http.get('api/visitations.json').toPromise().then(res => res.json()),
        )
            .toPromise()
            .then(
                data => {
                    let api = {
                        'invoices': data[0]['invoices'],
                        'labResults': data[1]['tests'],
                        'patient': data[2],
                        'physician': data[3],
                        'prescriptions': data[4]['prescriptions'],
                        'visitations': data[5]['visitations']
                    };
                    return api;
                },
                err => this.handleError(err)
            )
            .catch(this.handleError);


    }


    private handleError(error: any) {
        console.error('An error occurred', error);
        this.router.navigate(['/home']);
        return Promise.reject(error.message || error);
    }
}
