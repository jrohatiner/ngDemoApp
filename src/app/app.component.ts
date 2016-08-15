import {Component}          from '@angular/core';

import './rxjs-extensions.ts';

require('!!style!css!less!../css/includes.less');

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})


export class AppComponent {
    title = 'LabCorp Title';
}
