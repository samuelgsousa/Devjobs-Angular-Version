// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DetailsModule } from './app/details/details.module';
import { TitleGuard } from './title.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [TitleGuard],
        data: { title: 'Home page' },
    },
    {
        path: 'details/:id',
        loadChildren: () => import('./app/details/details.module').then(m => m.DetailsModule),
        canActivate: [TitleGuard],
        data: { title: 'Home details' },
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
