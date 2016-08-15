/**
 * Created by reyra on 8/14/2016.
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {dashboardRouting} from "./dashboard.routing";
import {DashboardComponent} from "./dashboard.component";




@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		dashboardRouting
	],
	declarations:[
		DashboardComponent
	]
})
export class DashboardModule {
}
