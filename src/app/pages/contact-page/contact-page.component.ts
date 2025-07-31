import { Component } from '@angular/core';
import {ContactCardComponent} from '../../components/contact-card/contact-card.component';

@Component({
  selector: 'app-contact-page',
    imports: [
        ContactCardComponent
    ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
