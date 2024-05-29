import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaPreviewComponent } from '../vaga-preview/vaga-preview.component';
import { Vagapreview } from '../vagapreview';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VagaPreviewComponent],
  template: `
<section>
  
   <form>
    <input type="text" placeholder="Filtrar por cargo ou empresa">
    <button class="primary" type="button">Buscar</button>
   </form>
  
</section>

<section class="results">
  <app-vaga-preview *ngFor="let vagaPreview of vagaPreviewList" [Vagapreview]="vagaPreview"/>
</section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  vagaPreviewList: Vagapreview[] = [
    {
      id: 1,
      nome_empresa: 'Teste SA',
      logo: 'https://via.placeholder.com/50',
      data_pub: new Date('2024-05-28'),
      cargo: 'Desenvolvedor full teste',
      descricao: 'Aqui vai uma',
      localidade: 'Coitadolândia',
      tipo: 'Presencial',
      requisitos: ['Alto', 'Bonito', 'Tatuado']
    },
    {
      id: 2,
      nome_empresa: 'Pashion 4 Fashion',
      logo: 'https://via.placeholder.com/50',
      data_pub: new Date('2024-05-28'),
      cargo: 'Plena',
      descricao: 'Ah qui fiqui fiqui emenémené ah vá cagar',
      localidade: 'Fubanga-city',
      tipo: 'Presencial',
      requisitos: ['Alto', 'Bonito', 'Tatuado']
    },
    {
      id: 3,
      nome_empresa: 'The other woman',
      logo: 'https://via.placeholder.com/50',
      data_pub: new Date('2024-05-28'),
      cargo: 'Taylor swift puta rampeira',
      descricao: 'yes ranni',
      localidade: 'Oi? é pra ler?',
      tipo: 'Presencial',
      requisitos: ['Alto', 'Bonito', 'Tatuado']
    }
  ]

}
