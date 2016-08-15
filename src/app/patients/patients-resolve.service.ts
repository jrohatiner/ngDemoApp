import {Injectable}             from '@angular/core';
import {Http} from '@angular/http'
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Observable}             from 'rxjs/Observable';


export class Patients {
    constructor(public patient: Object) {
    }
}


@Injectable()
export class PatientsResolve implements Resolve<Patients> {

    private patientsJson = 'api/patients.json';  // URL to web api

    constructor(private http: Http) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {


        return this.http.get(this.patientsJson)
            .toPromise()
            .then(response => response.json().data as Patients[])
            .catch(this.handleError);
    }


    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
