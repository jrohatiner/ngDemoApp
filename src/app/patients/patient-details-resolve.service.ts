import {Injectable}             from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {PatientService} from "./patients.service";


@Injectable()
export class PatientDetailsResolve implements Resolve<any> {

    constructor(private patientService: PatientService) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<any> | any {
        return function (route: any, patient: any) {
            let id: any = route.params.id;
            return patient.getDetails(id);
        }(route, this.patientService);
    }

}
