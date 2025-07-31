import { Component } from '@angular/core';
import {projects} from '../../shared/projects';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

    protected readonly projects = projects;
}
