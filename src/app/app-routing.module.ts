import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: { title: 'Home page' }, // Exemplo de configuração de título
    },
    {
        path: 'details/:id',
        loadChildren: () => import('./details/details.module').then(m => m.DetailsModule),
        data: { title: 'Home details' }, // Exemplo de configuração de título para detalhes
    }]

@NgModule({

    imports: [RouterModule.forRoot(routes)], // Configuração correta das rotas usando RouterModule.forRoot
    exports: [RouterModule]
})
export class AppRoutingModule {
    static routes = routes;
}
