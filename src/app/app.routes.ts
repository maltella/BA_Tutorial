import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tutorial } from './tutorial/tutorial';
import { Finished } from './finished/finished';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tutorial', component: Tutorial},
    { path: 'done', component: Finished}
];
