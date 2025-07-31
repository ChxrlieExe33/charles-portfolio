import { Component } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import {AboutMeComponent} from '../../components/about-me/about-me.component';
import {TechStackComponent} from '../../components/tech-stack/tech-stack.component';

@Component({
  selector: 'app-main-page',
    imports: [
        HeroComponent,
        AboutMeComponent,
    ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
