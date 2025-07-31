import {Component, HostBinding} from '@angular/core';
import {TechStackComponent} from '../../components/tech-stack/tech-stack.component';

@Component({
  selector: 'app-projects-page',
    imports: [
        TechStackComponent
    ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {

}
