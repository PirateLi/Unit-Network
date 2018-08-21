import { Component } from '@angular/core';
import {Storage} from './storage.service';

@Component({
	selector: 'app-root',
	template: `
		<autoc></autoc>
		<tabs></tabs>
	`,
	styleUrls: ['./app.component.css'],
	providers: [Storage]
})
export class AppComponent {
	title = 'app';
}
