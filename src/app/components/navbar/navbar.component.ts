import {Component, EventEmitter, OnInit, Output, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NavMenuService} from '../../shared/services/nav-menu.service';

@Component({
  selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive,
        MatIconModule,
        MatButtonModule
    ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    @Output() openMenu = new EventEmitter<boolean>();

    isOpen = signal(false);

    constructor(private readonly navService : NavMenuService) {}

    ngOnInit() {

        this.subscribeToNavMenu();
    }

    toggleMenu () {

        this.navService.toggleNavMenu();

    }

    closeMenu () {
        this.navService.closeNav();
    }

    subscribeToNavMenu () {

        this.navService.navMenuOpen$.subscribe(val => this.isOpen.set(val));
    }

}
