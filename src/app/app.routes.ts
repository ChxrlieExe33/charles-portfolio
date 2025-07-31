import { Routes } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {BlogPageComponent} from './pages/blog-page/blog-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'projects',
        component: ProjectsPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'blog',
        component: BlogPageComponent
    }
];
