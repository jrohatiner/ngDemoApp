// Imports for loading & configuring the in-memory web api
import {HttpModule} from '@angular/http';
/**
 * Created by ramor11 on 8/10/2016.
 */
import {NgModule}  from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

//routing
import {routing}        from './app.routing';

//application declarations
import {AppComponent}  from './app.component';
import {PatientsModule} from "./patients/patients.module";


@NgModule({
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		PatientsModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})


export class AppModule {

}
