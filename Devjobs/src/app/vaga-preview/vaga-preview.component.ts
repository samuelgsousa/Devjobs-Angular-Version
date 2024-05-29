import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vagapreview } from '../vagapreview';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vaga-preview',
  standalone: true,
  imports: [CommonModule, NgbToastModule],
  template: `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <section class="listing">

  
  <div class="card mb-3" style="max-width: 25rem;">
  <div class="card-header bg-transparent ">
    <img src="https://via.placeholder.com/50" alt="Logo" class="listing-photo"/>
    <h2 class="listing-heading">{{Vagapreview.cargo}}</h2>

  </div>

<div class="card-body">
    <div>
      <h5 class="card-title">{{Vagapreview.nome_empresa}}</h5>

      <H5>{{Vagapreview.localidade}}</H5>

      <h5>{{Vagapreview.data_pub | date:'MMMM-dd-YYYY'}}</h5>
    </div>

  <h5>Descrição:</h5> 
    <p class="card-text">{{Vagapreview.descricao}}</p>

  <h5>Requisitos</h5>
    <p>{{Vagapreview.requisitos}}</p>

</div>

</div>

    
  </section>
  `,
  styleUrl: './vaga-preview.component.css'
})
export class VagaPreviewComponent {

  @Input() Vagapreview!: Vagapreview
}
