// Imports for loading & configuring the in-memory web api
import {HttpModule} from '@angular/http';
/**
 * Created by ramor11 on 8/10/2016.
 */
import {NgModule, NgModuleFactoryLoader}  from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {AsyncNgModuleLoader} from './utils/async-ng-module-loader';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';

//routing
import {routing}        from './app.routing';

//application declarations
import {AppComponent}  from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";


@NgModule({
	imports     : [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
		DashboardModule
	],
	declarations: [
		AppComponent
	],
	providers   : [
		{provide: LocationStrategy, useClass: HashLocationStrategy},
		{provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader}
	],
	bootstrap   : [AppComponent]
})


export class AppModule {

}
