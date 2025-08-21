import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

    private navMenuOpen = new BehaviorSubject<boolean>(false);
    public navMenuOpen$ = this.navMenuOpen.asObservable()

    constructor() { }

    public toggleNavMenu () {

        if (this.navMenuOpen.value) {
            this.navMenuOpen.next(false);
        } else {
            this.navMenuOpen.next(true);
        }
    }

    public setNavMenuOpen (state : boolean) {

        this.navMenuOpen.next(state);
    }

    public closeNav() {
        this.navMenuOpen.next(false);
    }
}
