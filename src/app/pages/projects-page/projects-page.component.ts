import {Component, HostBinding} from '@angular/core';
import {TechStackComponent} from '../../components/tech-stack/tech-stack.component';
import {ProjectListComponent} from '../../components/project-list/project-list.component';

@Component({
  selector: 'app-projects-page',
    imports: [
        TechStackComponent,
        ProjectListComponent
    ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {

}
