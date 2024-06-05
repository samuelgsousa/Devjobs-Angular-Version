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
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<body>
  
  <section>
  
    <div class="d-flex" role="search" id="search">
          <div id="search-bar">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" #filter>
            <button class="btn btn-outline-success" (click)="filterResults(filter.value)">Search</button>
          </div>
    </div>
  
  </section>
  
  <section class="results">
    <app-vaga-preview *ngFor="let vagaPreview of filteredVagasList" [Vagapreview]="vagaPreview"/>
  </section>
</body>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {

  vagaPreviewList: Vagapreview[] = []
  vagaService: VagaService = inject(VagaService)

  filteredVagasList: Vagapreview[] = []

  constructor(){
    this.vagaPreviewList = this.vagaService.getAllVagas()
    this.filteredVagasList = this.vagaPreviewList
  }

  filterResults(text: string){
    
    if(!text){
      this.filteredVagasList = this.vagaPreviewList
      return
    }

    this.filteredVagasList = this.vagaPreviewList.filter((vagaPreview) => 
    vagaPreview?.localidade.toLowerCase().includes(text.toLowerCase())
    )
  }

}
