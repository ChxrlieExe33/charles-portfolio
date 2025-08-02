import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HiddenMenuComponent} from './components/hidden-menu/hidden-menu.component';


@Component({
    selector: 'app-root',
    imports: [NavbarComponent, RouterOutlet, HiddenMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

    openMenu : boolean = false;

    constructor(private router: Router) {}

    setMenuOpen (state : boolean) {
        this.openMenu = state;
    }

    ngOnInit() {
        const redirect = sessionStorage.getItem('github-pages-redirect');
        if (redirect) {
            sessionStorage.removeItem('github-pages-redirect');
            this.router.navigateByUrl(redirect);
        }
    }

}
