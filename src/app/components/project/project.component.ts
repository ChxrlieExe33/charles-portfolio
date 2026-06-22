import {Component, computed, effect, input, signal} from '@angular/core';
import {Project} from '../../shared/models/project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

    project = input.required<Project>();
    postMedia = computed(() => this.project().images ?? []);

    currentMediaIndex = signal(0);

    constructor() {
        // Reset carousel index whenever the project changes
        effect(() => {
            this.project(); // track the signal
            this.currentMediaIndex.set(0);
        });
    }

    nextMedia(): void {
        if (this.postMedia() && this.currentMediaIndex() < this.postMedia().length - 1) {
            this.currentMediaIndex.update(i => i + 1);
        }
    }

    previousMedia(): void {
        if (this.currentMediaIndex() > 0) {
            this.currentMediaIndex.update(i => i - 1);
        }
    }

    goToMedia(index: number): void {
        if (this.postMedia() && index >= 0 && index < this.postMedia().length) {
            this.currentMediaIndex.set(index);
        }
    }

}

