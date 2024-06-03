import { Injectable } from '@angular/core';
import { Vagapreview } from './vagapreview';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  protected vagaPreviewList: Vagapreview[] = [
    {
      id: 1,
      nome_empresa: 'Teste SA',
      logo: 'https://via.placeholder.com/50',
      data_pub: new Date('2024-05-28'),
      cargo: 'Desenvolvedor full teste',
      descricao: 'Aqui vai uma Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
      descricao: 'yes ranni ',
      localidade: 'Oi? é pra ler?',
      tipo: 'Presencial',
      requisitos: ['Alto', 'Bonito', 'Tatuado']
    }
  ]

  getAllVagas(): Vagapreview[]{
    return this.vagaPreviewList
  }

  getVagaById(id: number): Vagapreview | undefined {
    return this.vagaPreviewList.find((vagaPreview) => vagaPreview.id === id)
  }

  constructor() { }
}
