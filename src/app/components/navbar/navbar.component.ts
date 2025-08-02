import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
export class NavbarComponent {

    @Output() openMenu = new EventEmitter<boolean>();

    isOpen = signal(false);

    toggleMenu () {

        this.isOpen.set(!this.isOpen());
        this.openMenu.emit(this.isOpen());

    }

    closeMenu () {
        this.isOpen.set(false);
        this.openMenu.emit(false);
    }

}
