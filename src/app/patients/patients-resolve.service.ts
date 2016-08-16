import {Injectable}             from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {PatientService} from "./patients.service";


@Injectable()
export class PatientsResolve implements Resolve<any> {

    constructor(private router: Router,
                private patientService: PatientService) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<any> | any {
        return this.patientService.getPatients()
            .toPromise()
            .catch(this.handleError);

    }


    private handleError(error: any) {
        console.error('An error occurred', error);
        this.router.navigate(['/home']);
        return Promise.reject(error.message || error);
    }
}
