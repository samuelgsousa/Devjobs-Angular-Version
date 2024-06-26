import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'details/:id',
        loadChildren: () => import('./details/details.module').then(m => m.DetailsModule),
        title: 'Home details',
    },
];

export default routeConfig;
