import { Component } from '@angular/core';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero',
    imports: [
        FaIconComponent
    ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    faX = faXTwitter;
    faLinkedin = faLinkedin;
    faGithub = faGithub;
}
