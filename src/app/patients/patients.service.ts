/**
 * Created by ramor11 on 8/16/2016.
 */
import {Injectable}             from '@angular/core';
import {Http, Response} from '@angular/http'


export class Patients {
    constructor(public id: number,
                public fname: string,
                public lname: string,
                public imageUrl: string) {
    }
}


@Injectable()
export class PatientService {

    private patients: Array<any>;  // URL to web api
    private patientDetails: Array<any>;  // URL to web api

    constructor(private http: Http) {
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




}
