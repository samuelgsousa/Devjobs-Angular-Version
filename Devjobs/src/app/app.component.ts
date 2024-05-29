import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  template: `
  <app-header></app-header>
  
      <section class="content">
        <app-home></app-home>
      </section>

      
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devjobs';
}
