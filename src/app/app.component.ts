import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HiddenMenuComponent} from './components/hidden-menu/hidden-menu.component';
import {NavMenuService} from './shared/services/nav-menu.service';


@Component({
    selector: 'app-root',
    imports: [NavbarComponent, RouterOutlet, HiddenMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

    openMenu : boolean = false;

    constructor(private router: Router, private navService : NavMenuService) {}

    setMenuOpen (state : boolean) {
        this.navService.setNavMenuOpen(state);
    }

    ngOnInit() {
        const redirect = sessionStorage.getItem('github-pages-redirect');
        if (redirect) {
            sessionStorage.removeItem('github-pages-redirect');
            this.router.navigateByUrl(redirect);
        }

        this.subscribeToNavMenu();
    }

    subscribeToNavMenu () {

        this.navService.navMenuOpen$.subscribe(val => this.openMenu = val);
    }

}
