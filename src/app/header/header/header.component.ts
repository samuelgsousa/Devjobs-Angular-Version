import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header', //é o nome pelo qual vou chamar em outro componente.
  standalone: true,
  imports: [CommonModule],
  template: `
  <header>
    <h1>Devjobs</h1>
  </header>
  
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
}
