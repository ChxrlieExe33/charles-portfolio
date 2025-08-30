import {Component, input, Input, OnInit, signal} from '@angular/core';
import {Project} from '../../shared/models/project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {

    project = input.required<Project>();
    postMedia = signal<string[]>([]);

    currentMediaIndex = 0;

    ngOnInit(): void {

        if (this.project().images) {
            this.postMedia.set(this.project().images!);
        }


    }

    nextMedia(): void {
        if (this.postMedia() && this.currentMediaIndex < this.postMedia().length - 1) {
            this.currentMediaIndex++;
        }
    }

    previousMedia(): void {
        if (this.currentMediaIndex > 0) {
            this.currentMediaIndex--;
        }
    }

    goToMedia(index: number): void {
        if (this.postMedia() && index >= 0 && index < this.postMedia().length) {
            this.currentMediaIndex = index;
        }
    }

}
