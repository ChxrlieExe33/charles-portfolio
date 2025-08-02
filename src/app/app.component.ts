import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HiddenMenuComponent} from './components/hidden-menu/hidden-menu.component';


@Component({
    selector: 'app-root',
    imports: [NavbarComponent, RouterOutlet, HiddenMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {

    openMenu : boolean = false;

    setMenuOpen (state : boolean) {
        this.openMenu = state;
    }

}
