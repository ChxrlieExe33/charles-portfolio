import { Component, signal } from '@angular/core';
import { projects } from '../../shared/projects';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../../shared/models/project.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-project-list',
    imports: [
        ProjectComponent,
        NgClass
    ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
    protected readonly projects = projects;
    activeProject = signal<Project | null>(projects.length > 0 ? projects[0] : null);

    setActiveProject(project: Project) {
      this.activeProject.set(project);
    }
}
