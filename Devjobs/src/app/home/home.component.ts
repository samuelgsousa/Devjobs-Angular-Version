import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaPreviewComponent } from '../vaga-preview/vaga-preview.component';
import { Vagapreview } from '../vagapreview';
import { VagaService } from '../vaga.service';


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

  vagaPreviewList: Vagapreview[] = []
  vagaService: VagaService = inject(VagaService)

  constructor(){
    this.vagaPreviewList = this.vagaService.getAllVagas()
  }

}
