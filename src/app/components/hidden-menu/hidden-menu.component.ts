import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-hidden-menu',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './hidden-menu.component.html',
  styleUrl: './hidden-menu.component.css'
})
export class HiddenMenuComponent {

    @Output() closeMenu = new EventEmitter<void>();

    closeMenuOnNavigation () {
        this.closeMenu.emit();
    }
}
