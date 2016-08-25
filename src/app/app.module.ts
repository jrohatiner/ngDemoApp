// Imports for loading & configuring the in-memory web api
import {HttpModule} from '@angular/http';
/**
 * Created by ramor11 on 8/10/2016.
 */
import {NgModule}  from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//routing
import {routing}        from './app.routing';

//application declarations
import {AppComponent}  from './app.component';
import {PatientsModule} from "./patients/patients.module";


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
		PatientsModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		{provide: LocationStrategy, useClass: HashLocationStrategy}
	],
	bootstrap: [AppComponent]
})


export class AppModule {

}
