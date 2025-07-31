import {Component, input, Input} from '@angular/core';
import {Project} from '../../shared/models/project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

    project = input<Project>();

}
