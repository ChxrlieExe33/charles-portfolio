import { Component } from '@angular/core';
import {studies} from '../../shared/studies';
import {experience} from '../../shared/experience';

@Component({
    selector: 'app-about-me',
    imports: [],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css',
    host: {
        class: 'w-full flex items-center justify-center bg-[#1B1B1D] p-4',
    }
})
export class AboutMeComponent {

    protected readonly studies = studies;
    protected readonly experience = experience;
}
