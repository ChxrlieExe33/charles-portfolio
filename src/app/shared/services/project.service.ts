import { Injectable } from '@angular/core';
import {Project} from '../models/project.model';
import {projects} from '../projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor() {
        this.projects = projects;
    }

    projects: Project[];

    public getAllProjects() {

        return this.projects;

    }

    public getProject(projectId: string) {

        return this.projects.find((project) => project.id === projectId);

    }
}
