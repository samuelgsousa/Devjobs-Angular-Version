import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Vagapreview } from '../vagapreview';
import { VagaPreviewComponent } from '../vaga-preview/vaga-preview.component';
import { VagaService } from '../vaga.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, VagaPreviewComponent], 
  template:`
  <article>
    <img [src]="vagaPreview?.logo" alt="">
    <section>
      <h2>{{vagaPreview?.cargo}}</h2>
    </section>
  </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute)
    vagaService = inject(VagaService)
    vagaPreview: Vagapreview | undefined

    constructor() {
      const vagaPreviewId = Number(this.route.snapshot.params['id'])
      this.vagaPreview = this.vagaService.getVagaById(vagaPreviewId)
    }
}
