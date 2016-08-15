import {Injectable}             from '@angular/core';
import {Http} from '@angular/http'
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';


export class Patients {
    constructor(public id: number,
                public fname: string,
                public lname: string,
                public imageUrl: string) {
    }
}


@Injectable()
export class PatientsResolve implements Resolve<Patients> {

    private patientsJson = 'api/patients.json';  // URL to web api

    constructor(private router: Router,
                private http: Http) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<any> | any {
        let patients:Array<any> = [];

        return this.http.get(this.patientsJson)
            .toPromise()
            .then(response => {
                response.json().patientList.forEach((obj:any, idx:number) => {
                    let p = obj.patient;
                    patients.push(new Patients(
                        idx,
                        p.firstName,
                        p.lastName,
                        p.imageUrl
                    ))
                });

                return patients
            })
            .catch(this.handleError);

    }


    private handleError(error: any) {
        console.error('An error occurred', error);
        this.router.navigate(['/home']);
        return Promise.reject(error.message || error);
    }
}
