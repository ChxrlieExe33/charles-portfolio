import {Component, input, Input} from '@angular/core';

export type Project = {
    title : string,
    description : string,
    frontendLink : string,
    backendLink : string,
}

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

    project = input<Project>();

}
