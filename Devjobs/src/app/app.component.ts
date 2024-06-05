import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, RouterModule],
  template: `

  <main>
   

      <a [routerLink]="['/']">
      <app-header/>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>

      
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devjobs';
}
