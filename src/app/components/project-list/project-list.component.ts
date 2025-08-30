import { Component } from '@angular/core';
import {projects} from '../../shared/projects';
import {ProjectComponent} from '../project/project.component';

@Component({
  selector: 'app-project-list',
    imports: [
        ProjectComponent
    ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

    protected readonly projects = projects;
}
